const base_url = 'https://api.scryfall.com'

const headers = {
	'User-Agent': 'essential-lands/0.0.1',
	'Accept': 'application/json',
}

export type ScryfallList<T> = {
	object: 'list'
	data: T[]
	has_more: boolean
	next_page?: string | null
	total_cards?: number | null
	warnings?: string[] | null
}

export type ScryfallSet = {
	object: 'set'
	id: string
	code: string
	mtgo_code?: string | null
	arena_code?: string | null
	tcgplayer_id?: number | null
	name: string
	set_type: 'core' | 'expansion' | 'masters' | 'eternal' | 'alchemy' | 'masterpiece' | 'arsenal' | 'from_the_vault' | 'spellbook' | 'premium_deck' | 'duel_deck' | 'draft_innovation' | 'treasure_chest' | 'commander' | 'planechase' | 'archenemy' | 'vanguard' | 'funny' | 'starter' | 'box' | 'promo' | 'token' | 'memorabilia' | 'minigame'
	released_at?: string | null
	block_code?: string | null
	block?: string | null
	parent_set_code?: string | null
	card_count: number
	printed_size?: number | null
	digital: boolean
	foil_only: boolean
	nonfoil_only: boolean
	scryfall_uri: string
	uri: string
	icon_svg_uri: string
	search_uri: string
}

export type ScryfallCardFace = {
	object: 'card_face'
	artist?: string | null
	cmc?: number | null
	color_indicator?: string[] | null
	colors?: string[] | null
	defense?: string | null
	flavor_text?: string | null
	illustration_id?: string | null
	image_uris?: Record<string, string> | null
	layout?: string | null
	loyalty?: string | null
	mana_cost: string
	name: string
	oracle_id?: string | null
	oracle_text?: string | null
	power?: string | null
	printed_name?: string | null
	printed_text?: string | null
	printed_type_line?: string | null
	toughness?: string | null
	type_line?: string | null
	watermark?: string | null
}

export type ScryfallRelatedCard = {
	object: 'related_card'
	id: string
	component: 'token' | 'meld_part' | 'meld_result' | 'combo_piece'
	name: string
	type_line: string
	uri: string
}

export type ScryfallCard = {
	object: 'card'
	id: string
	oracle_id?: string | null
	lang: string
	arena_id?: number | null
	mtgo_id?: number | null
	mtgo_foil_id?: number | null
	multiverse_ids?: number[] | null
	resource_id?: string | null
	tcgplayer_id?: number | null
	tcgplayer_etched_id?: number | null
	cardmarket_id?: number | null
	layout: 'normal' | 'split' | 'flip' | 'transform' | 'modal_dfc' | 'meld' | 'leveler' | 'class' | 'case' | 'saga' | 'adventure' | 'mutate' | 'prototype' | 'battle' | 'planar' | 'scheme' | 'vanguard' | 'token' | 'double_faced_token' | 'emblem' | 'augment' | 'host' | 'art_series' | 'reversible_card'
	prints_search_uri: string
	rulings_uri: string
	scryfall_uri: string
	uri: string
	all_parts?: ScryfallRelatedCard[] | null
	card_faces?: ScryfallCardFace[] | null
	cmc: number
	color_identity: string[]
	color_indicator?: string[] | null
	colors?: string[] | null
	defense?: string | null
	edhrec_rank?: number | null
	game_changer?: boolean | null
	hand_modifier?: string | null
	keywords: string[]
	legalities: Record<string, 'legal' | 'not_legal' | 'restricted' | 'banned'>
	life_modifier?: string | null
	loyalty?: string | null
	mana_cost?: string | null
	name: string
	oracle_text?: string | null
	penny_rank?: number | null
	power?: string | null
	produced_mana?: string[] | null
	reserved: boolean
	toughness?: string | null
	type_line: string
	artist?: string | null
	artist_ids?: string[] | null
	attraction_lights?: number[] | null
	booster: boolean
	border_color: 'black' | 'white' | 'borderless' | 'yellow' | 'silver' | 'gold'
	card_back_id: string
	collector_number: string
	content_warning?: boolean | null
	digital: boolean
	finishes: ('foil' | 'nonfoil' | 'etched')[]
	flavor_name?: string | null
	flavor_text?: string | null
	frame_effects?: string[] | null
	frame: string
	full_art: boolean
	games: ('paper' | 'arena' | 'mtgo' | 'astral' | 'sega')[]
	highres_image: boolean
	illustration_id?: string | null
	image_status: 'missing' | 'placeholder' | 'lowres' | 'highres_scan'
	image_uris?: Record<string, string> | null
	oversized: boolean
	prices: Record<string, string | null>
	printed_name?: string | null
	printed_text?: string | null
	printed_type_line?: string | null
	promo: boolean
	promo_types?: string[] | null
	purchase_uris?: Record<string, string> | null
	rarity: 'common' | 'uncommon' | 'rare' | 'special' | 'mythic' | 'bonus'
	related_uris: Record<string, string>
	released_at: string
	reprint: boolean
	scryfall_set_uri: string
	set_name: string
	set_search_uri: string
	set_type: ScryfallSet['set_type']
	set_uri: string
	set: string
	set_id: string
	story_spotlight: boolean
	textless: boolean
	variation: boolean
	variation_of?: string | null
	security_stamp?: 'oval' | 'triangle' | 'acorn' | 'circle' | 'arena' | 'heart' | null
	watermark?: string | null
	preview?: {
		previewed_at?: string | null
		source_uri?: string | null
		source?: string | null
	} | null
}

export type EndpointMap = {
	'/sets': ScryfallList<ScryfallSet>
	'/cards/search': ScryfallList<ScryfallCard>
}

export type ParamMap = {
	'/sets': undefined
	'/cards/search': {
		q: string
		unique?: 'cards' | 'art' | 'prints'
		order?: 'name' | 'set' | 'released' | 'rarity' | 'color' | 'usd' | 'tix' | 'eur' | 'cmc' | 'power' | 'toughness' | 'edhrec' | 'penny' | 'artist' | 'review'
		dir?: 'auto' | 'asc' | 'desc'
		include_extras?: 'true' | 'false'
		include_multilingual?: 'true' | 'false'
		include_variations?: 'true' | 'false'
		page?: `${number}`
		format?: 'json' | 'csv'
		pretty?: 'true' | 'false'
	}
}

export type ScryfallError = {
	object: 'error'
	status: number
	code: string
	details: string
	type?: string | null
	warnings?: string[] | null
}

type ScryfallFetch = <P extends keyof EndpointMap>(
	path: P,
	...args: undefined extends ParamMap[P] ? [] : [params: ParamMap[P]]
) => Promise<EndpointMap[P]>

export const scryfall_fetch: ScryfallFetch = async (path: string, params?: Record<string, string>) => {
	const url = new URL(path, base_url)
	if (params) {
		for (const [key, value] of Object.entries(params)) {
			url.searchParams.set(key, value)
		}
	}

	const response = await fetch(url, { headers })

	if (!response.ok) {
		const error: ScryfallError = await response.json()
		throw error
	}

	return await response.json()
}
