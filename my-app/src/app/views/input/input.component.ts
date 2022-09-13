import { Component, OnInit } from '@angular/core';
import { Store as Ngxs } from '@ngxs/store';
import { UpdatePokemon } from 'src/app/store/pokemon.actions';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public pokemonValue: number = 1;

  constructor(private store: Ngxs){

  }

  ngOnInit(): void {
    this.store.dispatch(new UpdatePokemon(this.pokemonValue));
  }

  public setPokemonValue(event: any): void {
    this.pokemonValue = event.target.value;
    this.store.dispatch(new UpdatePokemon(this.pokemonValue))
  }
}
