import { Component, Injectable, Input, OnInit, ɵresetJitOptions } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { ReturnStatement } from '@angular/compiler'; 
import { CustomPokemon } from '../CustomPokemon';
import { Router } from '@angular/router';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-api-fetcher',
  templateUrl: './api-fetcher.component.html',
  styleUrls: ['./api-fetcher.component.css']
})


@Injectable()
export class ApiFetcherComponent implements OnInit {
  
  @Input("Pokemon") pokemon : CustomPokemon

  constructor(private http: HttpClient,private router : Router) { }
  
  pokemons: Array<CustomPokemon> = new Array<CustomPokemon>();

  ngOnInit(): void {
  this.GetPokemon();
  
}


GetPokemon(){
  this.http.get<any>('https://localhost:44373/api/pokemon/').subscribe(data => {
    data.forEach(pokemon => {
      let newPoke = new CustomPokemon(pokemon);
      this.pokemons.push(newPoke);
    });
    this.pokemons.sort((a, b) => a.number - b.number);
  });  
  
  }

  
}
