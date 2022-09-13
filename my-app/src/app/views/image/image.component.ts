import { Component, OnInit } from '@angular/core';
import { Select, Store as Ngxs } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PokemonState } from 'src/app/store/pokemon.state';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Select(PokemonState.getImage) img$: Observable<string>;
  @Select(PokemonState.getName) name$: Observable<string>;
  @Select(PokemonState.getId) id$: Observable<number>;

  constructor(public store: Ngxs) { }

  ngOnInit(): void {
  }

}
