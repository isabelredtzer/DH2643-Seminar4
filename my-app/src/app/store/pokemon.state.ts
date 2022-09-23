import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UpdatePokemon } from './pokemon.actions';


export interface PokemonStateModel {
  name: string | undefined,
  img: string | undefined,
  id: number | undefined,
}

@State<PokemonStateModel>({
    name: 'pokemon',
    defaults: {
      name: undefined,
      img: undefined,
      id: undefined,
    }
})

@Injectable()
export class PokemonState {

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
        
        fetch("https://pokeapi.co/api/v2/pokemon/"+payload.pokemonId)
            .then(r=>r.json())
            .then(d => 
              {
                ctx.patchState(<PokemonStateModel>({
                  name: d.name, img, id: d.id
              }))
              }
             )
            .catch(e=> console.error(e));
    }

}