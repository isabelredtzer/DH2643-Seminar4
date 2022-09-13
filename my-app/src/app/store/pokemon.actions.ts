export class UpdatePokemon {
    static readonly type = '[Pokemon] Update Pokemon';
    constructor(public pokemonId: number) {}
  }