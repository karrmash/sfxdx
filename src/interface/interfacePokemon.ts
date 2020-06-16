export interface IElementPokemon {
    name: string // название покемона
}

export interface IListAbilities {
    abilities: {
        ability: {
            name: string
        }
    }[]
}

export interface IDataPokemon extends IListAbilities {
    id: number
    name: string
    // eslint-disable-next-line camelcase
    base_experience: number
    height: number
    weight: number
    order: number
    types: []
    sprites: {
        // eslint-disable-next-line camelcase
        front_default: string
    }
}

export interface IDataAbilities {
    // eslint-disable-next-line camelcase
    effect_entries: {
        effect: string,
        language: {
            name: string
        },
        // eslint-disable-next-line camelcase
        short_effect: string
    }[],
    pokemon: {
        pokemon: {
            name: string
        }
    }[]
}
