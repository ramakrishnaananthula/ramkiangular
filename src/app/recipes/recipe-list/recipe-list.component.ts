import { Component, OnInit } from '@angular/core';
import  { Recipe }from "../recipe.modal";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.w3schools.com/w3images/fjords.jpg'),
    new Recipe('A test Recipe 2', 'This is simply a test 2', 'https://www.w3schools.com/w3images/fjords.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
