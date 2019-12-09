import { Component, OnInit } from '@angular/core';

import {FactsService} from '../services/facts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  facts: any;
  objectFavorite: any = {id: "", value: ""};

  constructor(private factsService: FactsService) {
    this.getNewFact();
  }

  getNewFact() {
    this.factsService.getFact().subscribe(factResult => {
      this.facts = factResult;
    });
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
