import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ApiFetcherComponent } from './api-fetcher/api-fetcher.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ApiFetcherComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ApiFetcherComponent},
      {path: 'pokemon-Details', component: PokemonDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
