import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpStatus, HttpException } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('ingredients')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get('recipe:id')
  async findRestaurantsByRecipe(@Param('id',ParseUUIDPipe) id: string) {
    const response = await this.restaurantsService.findRestaurantsByRecipe(id);
    if (response.length === 0) {
      throw new HttpException('RESTAURANTS_RECOMMENDED_NOT_FOUND', 404)
    } else {
      return response
    } 
  }

  @Post()
  async create(@Body() createRestaurantDto: CreateRestaurantDto) {
    const response = await this.restaurantsService.create(createRestaurantDto);
    if (response === false) {
      throw new HttpException('BAD_REQUEST', 400)
    } else {
      return response
    }
  }

  @Get()
  async findAll() {
    const response = await this.restaurantsService.findAll();
    if (response.length === 0) {
      throw new HttpException('RESTAURANT_NOT_FOUND', 404)
    } else {
      return response
    } 
  }

  @Get(':id')
  async findOne(@Param('id',ParseUUIDPipe) id: string) {
    const response = await this.restaurantsService.findOne(id);
    if (response.length === 0) {
      throw new HttpException('RESTAURANT_NOT_FOUND', 404)
    } else {
      return response
    } 
  }

  @Patch(':id')
  async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
    const confirmedOfExistence = await this.restaurantsService.findOne(id);
    if (confirmedOfExistence.length !== 0) {
      const response = await this.restaurantsService.update(id, updateRestaurantDto);
      if (response === false) {
        throw new HttpException('BAD_REQUEST', 400)
      } else {
        return response
      } 
    } else throw new HttpException('RECIPE_NOT_FOUND', 404)
  }

  @Delete(':id')
  async remove(@Param('id',new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: string) { 
    const confirmedOfExistence = await this.restaurantsService.findOne(id);
    if (confirmedOfExistence.length !== 0) {
      const response = await  this.restaurantsService.remove(id);
      if (response === false) {
        throw new HttpException('BAD_REQUEST', 400)
      } else {
        return response
      } 
    } else throw new HttpException('RECIPE_NOT_FOUND', 404)
  }
}
