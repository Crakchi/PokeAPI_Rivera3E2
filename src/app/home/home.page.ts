import { APIServiceService } from '../Services/apiservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonID: number=0;
  pokemonName: string="";
  pokemonIDResult: any;
  pokemonNameResult: any;
  itemID: number=0;
  itemName: string="";
  itemIDResult: any;
  itemNameResult: any;

  constructor(private api: APIServiceService) {}

  getPokemonDataID(id: number) {
    try {
      this.api.getPokemonID(id).subscribe((response => {
        this.pokemonIDResult = response;
      }));
    } catch (error) {
      console.log(error);
    }
  }

  getPokemonDataName(name: string) {
    try {
      this.api.getPokemonName(name).subscribe((response => {
        this.pokemonNameResult = response;
      }));
    } catch (error) {
      console.log(error);
    }
  }

  getItemDataID(id: number) {
    try {
      this.api.getItemID(id).subscribe((response => {
        this.itemIDResult = response;
      }));
    } catch (error) {
      console.log(error);
    }
  }

  getItemDataName(name: string) {
    try {
      this.api.getItemName(name).subscribe((response => {
        this.itemNameResult = response;
      }));
    } catch (error) {
      console.log(error);
    }
  }
}
