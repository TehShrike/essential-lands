import { scryfall_fetch } from './scryfall.ts'
import { find_dual_color_combos, is_valid_color } from './find_dual_color_combos.ts'
import { filter } from './array.ts'

const [,,arg = 'gwbur'] = process.argv

const dual_color_combos = find_dual_color_combos(filter(arg.split(''), is_valid_color))

const { data: lands } = await scryfall_fetch('/cards/search', {
	q: 'produces:gb type:land format:standard',
})

for (const land of lands) {
	console.log(`${land.name} [${land.set.toUpperCase()}]`)
	console.log(land.oracle_text ?? '')
	console.log()
}
