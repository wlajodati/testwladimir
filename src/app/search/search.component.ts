import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

import {FactsService} from '../services/facts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  facts: any;
  searchQuery: any = {query: ""};
  objectFavorite: any = {id: "", value: ""};

  constructor(private factsService: FactsService) { }

  getNewSearchFact() {
    if(this.searchQuery.query.length < 3) {
      this.facts = {error: true, value: "Please, we beg you, write something to search or Chuck will go mad!!!!!"};
    }else {
      this.factsService.getFactBySearch(this.searchQuery.query).subscribe(factsResult => {
        if(factsResult.total == 0) {
          this.facts = {error: true, value: "What? No Chuck Norris' fact for your search??? The apocalypse must be happening!!!!!"};
        }
        let index = Math.round(Math.random() * factsResult.total);
        this.facts = factsResult.result[index];
      });
    }
  }

  addFavorite(id, value) {
    this.objectFavorite = {id: id, value: value};

    this.factsService.addFavoriteFacts(this.objectFavorite).subscribe(factResult => {
      console.log(JSON.stringify(this.objectFavorite));
    });
  }

  ngOnInit() {
  }

}
