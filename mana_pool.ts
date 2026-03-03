const base_url = 'https://manapool.com/api/v1'

type ManaPoolLanguage = 'EN' | 'JA' | 'FR' | 'IT' | 'DE' | 'ES' | 'AR' | 'CS' | 'CT' | 'EL' | 'HE' | 'KO' | 'LA' | 'PH' | 'PT' | 'RU' | 'SA'

export type ManaPoolSale = {
	created_at: string
	price: number
	quantity: number
}

export type ManaPoolVariant = {
	product_type: string
	product_id: string
	tcgplayer_sku_id: number
	language_id: ManaPoolLanguage
	condition_id: string
	finish_id: string
	low_price: number
	available_quantity: number
	recent_sales: ManaPoolSale[]
}

export type ManaPoolSingle = {
	url: string
	name: string
	set_code: string
	number: string
	multiverse_id: string
	scryfall_id: string
	tcgplayer_product_id: number
	available_quantity: number
	price_cents: number
	price_cents_lp_plus: number
	price_cents_nm: number
	price_cents_foil: number
	price_cents_lp_plus_foil: number
	price_cents_nm_foil: number
	price_cents_etched: number
	price_cents_lp_plus_etched: number
	price_cents_nm_etched: number
	price_market: number
	price_market_foil: number
	variants: ManaPoolVariant[]
}

export type ManaPoolResponse<T> = {
	meta: {
		as_of: string
	}
	data: T[]
}

export type ManaPoolError = {
	status: number
	message: string
	details: string[]
}

export type EndpointMap = {
	'/products/singles': ManaPoolResponse<ManaPoolSingle>
}

export type ParamMap = {
	'/products/singles': {
		scryfall_ids?: string[]
		tcgplayer_ids?: number[]
		tcgplayer_sku_ids?: number[]
		mtgjson_uuids?: string[]
		product_ids?: string[]
		languages?: ManaPoolLanguage[]
	}
}

type ManaPoolFetch = <P extends keyof EndpointMap>(
	api_key: string,
	path: P,
	...args: undefined extends ParamMap[P] ? [] : [params: ParamMap[P]]
) => Promise<EndpointMap[P]>

export const mana_pool_fetch: ManaPoolFetch = async (api_key: string, path: string, params?: Record<string, string[] | number[] | undefined>) => {
	const url = new URL(base_url + path)
	if (params) {
		for (const [key, value] of Object.entries(params)) {
			if (value) {
				for (const item of value) {
					url.searchParams.append(key, String(item))
				}
			}
		}
	}

	const response = await fetch(url, {
		headers: {
			'Authorization': `Bearer ${api_key}`,
			'Accept': 'application/json',
		},
	})

	if (!response.ok) {
		console.log('status is', response.status)
		console.log('status text is', response.statusText)
		const error: ManaPoolError = await response.json()
		console.log('error is', error)
		throw error
	}

	return await response.json()
}
