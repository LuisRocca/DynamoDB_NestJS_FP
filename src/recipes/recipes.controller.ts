import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, ParseUUIDPipe, HttpStatus } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiTags } from '@nestjs/swagger';
import { IngredientsRecipeDto } from './dto/ingredients-recipe.dto';

@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('recommended')
  async GetRecipesByIngredients(@Body() IngredientsRecipeDto:IngredientsRecipeDto) {
    const response = await this.recipesService.getRecipesByIngredients(IngredientsRecipeDto);
    if (response.length === 0) {
      throw new HttpException('RECOMMENDED_NOT_FOUND', 404)
    } else {
      return response
    } 
  }

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    const response = await this.recipesService.create(createRecipeDto);
    if (response === false) {
      throw new HttpException('BAD_REQUEST', 400)
    } else {
      return response
    } 
  }

  @Get()
  async findAll() {
    const response = await this.recipesService.findAll();
    if (response.length === 0) {
      throw new HttpException('RECIPES_NOT_FOUND', 404)
    } else {
      return response
    } 
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const response = await this.recipesService.findOne(id);
    if (response.length === 0) {
      throw new HttpException('RECIPE_NOT_FOUND', 404)
    } else {
      return response
    } 
  }

  @Patch(':id')
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateRecipeDto: UpdateRecipeDto) { 
    const confirmedOfExistence = await this.recipesService.findOne(id);
    if (confirmedOfExistence.length !== 0) {
      const response = await this.recipesService.update(id, updateRecipeDto);
      if (response === false) {
        throw new HttpException('BAD_REQUEST', 400)
      } else {
        return response
      } 
    } else throw new HttpException('RECIPE_NOT_FOUND', 404)
  }

  @Delete(':id',)
  async remove(@Param('id',new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: string) {
    const confirmedOfExistence = await this.recipesService.findOne(id);
    if (confirmedOfExistence.length !== 0) {
      const response = await this.recipesService.remove(id);
    if (response === false) {
      throw new HttpException('BAD_REQUEST', 400)
    } else {
      return response
    } 
  } else throw new HttpException('RECIPE_NOT_FOUND', 404)
  }

}
