import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UpdatePokemon } from './pokemon.actions';
import { Store as Ngxs } from '@ngxs/store';


export interface PokemonStateModel {
    name: string | undefined,
    img: string | undefined,
    id: number | undefined,
    isLoading: boolean,
}

@State<PokemonStateModel>({
  name: 'pokemon',
  defaults: {
    name: undefined,
    img: undefined,
    id: undefined,
    isLoading: false,
  }
})

@Injectable()
export class PokemonState {
    constructor(private store: Ngxs) {}

    @Selector()
    static getName(state: PokemonStateModel) {
      return state.name;
    }

    @Selector()
    static getImage(state: PokemonStateModel) {
      return state.img;
    }

    @Selector()
    static getId(state: PokemonStateModel) {
      return state.id;
    }

    @Action(UpdatePokemon)
    updatePokemon(ctx: StateContext<PokemonStateModel>, payload: any) {
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${payload.pokemonId}.png`
        ctx.patchState(<PokemonStateModel>({
            img
          })
        );
      
        fetch("https://pokeapi.co/api/v2/pokemon/"+payload.pokemonId)
            .then(r=>r.json())
            .then(d => 
                ctx.patchState(<PokemonStateModel>({
                  name: d.name,
                  id: d.id
               })
             ))
            .catch(e=> console.error(e));
    }

}