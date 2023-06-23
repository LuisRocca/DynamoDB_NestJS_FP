import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { insertRecipes } from 'src/db/recipes/putRecipes';
import { getAllRecipes } from 'src/db/recipes/getRecipes';
import { getOneRecipe } from 'src/db/recipes/getRecipe';
import { deleteRecipe } from 'src/db/recipes/deleteRecipe';
import { v4 as uuidv4 } from 'uuid';

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
    return filteredRecipes
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return await insertRecipes(updateRecipeDto, id);
  }

  async remove(id: string) {
    return await deleteRecipe(id);
  }
}
