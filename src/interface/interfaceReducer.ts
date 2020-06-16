import { IDataAbilities, IDataPokemon } from './interfacePokemon';

export interface IReducer {
    app: IAppReducer
    pokemon: IPokemonReducer
}

export interface IPokemonReducer {
    list: []
    data: IDataPokemon,
    abilities: IDataAbilities
}

export interface IAppReducer {
    isLoader: boolean
    error: {
        flag: boolean
        message: string
    }

}
