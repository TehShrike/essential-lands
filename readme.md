How much are you going to need to spend on expensive dual lands for your standard legal deck?  Find out quickly.

First, get a [Mana Pool API](https://manapool.com/api/docs/v1) key.

Run from the root of this project:

```sh
MANA_POOL_API_KEY=[your api key] node index.ts gr
```

or run from npm:

```sh
MANA_POOL_API_KEY=[your api key] npx essential-lands gr
```

Example output:

```
Making 1 requests to Scryfall...
Making 1 requests to ManaPool...
Cavern of Souls [LCI] - $48.46
As this land enters, choose a creature type.
{T}: Add {C}.
{T}: Add one mana of any color. Spend this mana only to cast a creature spell of the chosen type, and that spell can't be countered.

Three Tree City [BLB] - $22.19
As Three Tree City enters, choose a creature type.
{T}: Add {C}.
{2}, {T}: Choose a color. Add an amount of mana of that color equal to the number of creatures you control of the chosen type.

Starting Town [FIN] - $13.69
This land enters tapped unless it's your first, second, or third turn of the game.
{T}: Add {C}.
{T}, Pay 1 life: Add one mana of any color.

Stomping Ground [EOE] - $8.70
({T}: Add {R} or {G}.)
As this land enters, you may pay 2 life. If you don't, it enters tapped.

Commercial District [MKM] - $8.54
({T}: Add {R} or {G}.)
This land enters tapped.
When this land enters, surveil 1. (Look at the top card of your library. You may put it into your graveyard.)

Thornspire Verge [DSK] - $6.24
{T}: Add {R}.
{T}: Add {G}. Activate only if you control a Mountain or a Forest.

Matzalantli, the Great Door // The Core [LCI] - $2.08


Maelstrom of the Spirit Dragon [TDM] - $1.53
{T}: Add {C}.
{T}: Add one mana of any color. Spend this mana only to cast a Dragon spell or an Omen spell.
{4}, {T}, Sacrifice this land: Search your library for a Dragon card, reveal it, put it into your hand, then shuffle.
```

## Arguments

You may pass in one argument with the colors of lands in your deck.  If you don't, it will show all the available multicolor lands, which is probably more than you want.
