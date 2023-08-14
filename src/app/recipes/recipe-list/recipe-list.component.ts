import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes:Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg"),
    new Recipe('A Test Recipe 2', 'This is simply a test', "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg")
  ];

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }

  constructor(){

  }

  ngOnInit(){

  }
}
