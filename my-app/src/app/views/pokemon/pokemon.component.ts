import { Component } from '@angular/core';
import { Select, Store as Ngxs } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PokemonState } from 'src/app/store/pokemon.state';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent {
  @Select(PokemonState.getImage) img$: Observable<string>;
  @Select(PokemonState.getName) name$: Observable<string>;
  @Select(PokemonState.getId) id$: Observable<number>;

  constructor(public store: Ngxs) { }
}
