import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

import {FactsService} from '../services/facts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  facts: any;
  categories: any;
  catSearch: any = {category: ""};
  objectFavorite: any = {id: "", value: ""};

  constructor(private factsService: FactsService) { }

  getNewCategoryFact() {
    this.factsService.getCategoryFact(this.catSearch.category).subscribe(factsResult => {
      this.facts = factsResult;
    },
    error => {
      if(this.catSearch.category == "") {
        this.facts = {error: true, value: "Please, select a category if you don't want Chuck roundhouse-kicks you!!!"};
      }else {
        this.facts = {error: true, value: "An error has ocurred. Please, try again!"};
      }
    });
  }

  addFavorite(id, value) {
    this.objectFavorite = {id: id, value: value};

    this.factsService.addFavoriteFacts(this.objectFavorite).subscribe(factResult => {
      console.log(JSON.stringify(this.objectFavorite));
    });
  }

  ngOnInit() {
    this.factsService.getCategories().subscribe(categoriesResult =>{
      this.categories = categoriesResult;
    });
  }
}
