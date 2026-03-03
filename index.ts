import { scryfall_fetch } from './scryfall.ts'

const { data: lands } = await scryfall_fetch('/cards/search', {
	q: 'produces:gb type:land format:standard',
})

for (const land of lands) {
	console.log(`${land.name} [${land.set.toUpperCase()}]`)
	console.log(land.oracle_text ?? '')
	console.log()
}
