import {EventEmitter, Injectable} from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Baked Salmon',
      'Delicious sauteed salmon with leeks and tomatoes',
      'https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg',
      [
        new Ingredient('Salmon', 4),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Leeks', 1)
      ]),
    new Recipe(
      'Homemade Pizza',
      'Classic homemade pizza recipe',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/1/21/2/FNM_030110-Insert-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539253724.jpeg',
      [
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Pizza Sauce', 1),
        new Ingredient('Mozzerella', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
