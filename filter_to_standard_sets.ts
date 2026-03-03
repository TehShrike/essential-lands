import { ScryfallSet } from './scryfall.ts'

const standard_set_types = new Set<ScryfallSet['set_type']>(['core', 'expansion'])

const release_year = (s: ScryfallSet) => Number(s.released_at!.slice(0, 4))
const filter = <T>(array: T[], predicate: (element: T) => boolean): T[] => {
	const result: T[] = []
	for (let i = 0; i < array.length; ++i) {
		if (predicate(array[i])) {
			result.push(array[i])
		}
	}
	return result
}

export const filter_to_standard_sets = (sets: ScryfallSet[]): ScryfallSet[] => {
	let max_year = 0
	let foundations: ScryfallSet | null = null
	const eligible = filter(sets, s => {
		max_year = Math.max(max_year, release_year(s))
		if (s.code === 'fdn') {
			foundations = s
		}
		return standard_set_types.has(s.set_type) && !!s.released_at
	})

	const legal_years = new Set([max_year, max_year - 1, max_year - 2])

	const result = filter(eligible, s => legal_years.has(release_year(s)))

	if (max_year <= 2029 && foundations && !legal_years.has(release_year(foundations))) {
		result.push(foundations)
	}

	return result
}
