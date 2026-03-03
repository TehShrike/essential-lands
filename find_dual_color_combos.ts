export type ValidColor = 'w' | 'u' | 'b' | 'r' | 'g'

export const is_valid_color = (color: string): color is ValidColor => {
	return color === 'w' || color === 'u' || color === 'b' || color === 'r' || color === 'g'
}

export const find_dual_color_combos = (colors: ValidColor[]): [ValidColor, ValidColor][] => {
	const unique = [...new Set(colors)]
	const combos: [ValidColor, ValidColor][] = []
	for (let i = 0; i < unique.length; i++) {
		for (let j = i + 1; j < unique.length; j++) {
			combos.push([unique[i], unique[j]])
		}
	}
	return combos
}
