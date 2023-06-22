import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { insertRecipes } from 'src/db/recipes/putRecipes';
import { getAllRecipes } from 'src/db/recipes/getRecipes';
import { v4 as uuidv4 } from 'uuid';
import { getOneRecipe } from 'src/db/recipes/getrecipe';
// import { getAllRestaurants, getRestaurantsByrecipes } from 'src/db/restaurants/getRestaurants';

@Injectable()
export class RecipesService {
  async create(createRecipeDto: CreateRecipeDto) { 
    const uniqueId = uuidv4();
    return await insertRecipes(createRecipeDto, uniqueId);
  }

  async findAll() {
    return await getAllRecipes();
  }

  async findOne(id: string) {
    return await getOneRecipe(id);
  }

  async getRecipesByIngredients(ingredientsRecipeDto){
    const {ingredients} = ingredientsRecipeDto
    const allRecipes =await getAllRecipes()
    const filteredRecipes = allRecipes.filter(recipe => recipe.ingredients.some(ingredient => ingredients.includes(ingredient)));
    // await getRestaurantsByrecipes("0d2f27d5-bf0c-449b-9007-2fb7360c5b19")
    return filteredRecipes
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return await insertRecipes(updateRecipeDto, id);
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
