import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './views/input/input.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { PokemonState } from './store/pokemon.state';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([PokemonState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
