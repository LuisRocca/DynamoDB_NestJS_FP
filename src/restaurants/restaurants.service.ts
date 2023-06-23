import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { insertRestaurants } from 'src/db/restaurants/putRestaurants';
import { getAllRestaurants } from 'src/db/restaurants/getRestaurants';
import { getOneRestaurant } from 'src/db/restaurants/getRestaurant';
import { getRestaurantsByrecipes } from 'src/db/restaurants/getRestaurantsByrecipes';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RestaurantsService {
  constructor(
  ) {}
  
  async create(createRestaurantDto: CreateRestaurantDto) {
    const uniqueId = uuidv4();
    return await insertRestaurants(createRestaurantDto, uniqueId);
  }

  async findAll() {
    return await getAllRestaurants();
  }

  async findOne(id: string) {
    return await getOneRestaurant(id) ;
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return await insertRestaurants(updateRestaurantDto, id);
  }

  async findRestaurantsByRecipe(id: string) {
    return await getRestaurantsByrecipes(id)
  }

  remove(id: string) {
    return false;
  }
}
