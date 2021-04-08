import { Component, Injectable, OnInit, ɵresetJitOptions } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { ReturnStatement } from '@angular/compiler'; 
import { CustomPokemon } from '../CustomPokemon';

@Component({
  selector: 'app-api-fetcher',
  templateUrl: './api-fetcher.component.html',
  styleUrls: ['./api-fetcher.component.css']
})


@Injectable()
export class ApiFetcherComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  
  pokemons: Array<CustomPokemon> = new Array<CustomPokemon>();

  ngOnInit(): void {
  this.GetPokemon();    

  }

  GetPokemon(){
    this.http.get<any>('https://localhost:44373/api/pokemon/').subscribe(data => {
      data.forEach(pokemon => {
        console.log(data);
        let newPoke = new CustomPokemon(pokemon);
        this.pokemons.push(newPoke);
      });
    });   
  }
}
