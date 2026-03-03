export const filter: {
	<T, S extends T>(array: T[], predicate: (element: T) => element is S): S[]
	<T>(array: T[], predicate: (element: T) => boolean): T[]
} = <T>(array: T[], predicate: (element: T) => boolean): T[] => {
	const result: T[] = []
	for (let i = 0; i < array.length; ++i) {
		if (predicate(array[i])) {
			result.push(array[i])
		}
	}
	return result
}
