import { Component, OnInit } from '@angular/core';

import {FactsService} from '../services/facts.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: any;

  constructor(private factsService: FactsService) {
    this.getAllFavorites();
  }

  getAllFavorites() {
    this.factsService.getFavorites().subscribe(factsResult => {
      this.favorites = factsResult;
    });
  }

  ngOnInit() {
  }

}
