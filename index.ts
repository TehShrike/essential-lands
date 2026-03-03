#!/usr/bin/env node
import { scryfall_fetch, type ScryfallCard } from './scryfall.ts'
import { mana_pool_fetch } from './mana_pool.ts'
import { find_dual_color_combos, is_valid_color } from './find_dual_color_combos.ts'
import { filter } from './array.ts'

const [,,arg = 'gwbur'] = process.argv
const { MANA_POOL_API_KEY } = process.env

if (!MANA_POOL_API_KEY) {
	throw new Error('MANA_POOL_API_KEY is not set')
}

const dual_color_combos = find_dual_color_combos(filter(arg.split(''), is_valid_color))

console.log(`Making ${dual_color_combos.length} requests to Scryfall...`)

const responses = await Promise.all(dual_color_combos.map(async ([color1, color2]) => scryfall_fetch('/cards/search', {
	q: `produces:${color1}${color2} type:land format:standard`,
})))

const lands = responses.flatMap(response => response.data)

const lands_by_scryfall_id = new Map<string, ScryfallCard>(lands.map(land => [land.id, land]))

const scryfall_ids = [...lands_by_scryfall_id.keys()]
const chunks: string[][] = []
for (let i = 0; i < scryfall_ids.length; i += 100) {
	chunks.push(scryfall_ids.slice(i, i + 100))
}

console.log(`Making ${chunks.length} requests to ManaPool...`)

const price_responses = await Promise.all(chunks.map(chunk =>
	mana_pool_fetch(MANA_POOL_API_KEY, '/products/singles', {
		scryfall_ids: chunk,
		languages: ['EN'],
	})
))

const singles = price_responses.flatMap(response => response.data)
const expensive_singles = filter(singles, s => s.price_cents >= 1_00)
	.sort((a, b) => b.price_cents - a.price_cents)

for (const single of expensive_singles) {
	const card = lands_by_scryfall_id.get(single.scryfall_id)
	const price = (single.price_cents / 100).toFixed(2)
	console.log(`${card?.name ?? single.name} [${single.set_code}] - $${price}`)
	console.log(card?.oracle_text ?? '')
	console.log()
}
