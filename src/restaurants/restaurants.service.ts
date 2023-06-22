import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { InjectModel, ReturnModel } from '@skypress/nestjs-dynamodb';

// const ReturnModel = ReturnModel<Restaurant>()

@Injectable()
export class RestaurantsService {
  constructor(
    // @InjectModel(Restaurant)
    // private readonly restaurantsModel: typeof ReturnModel,
  ) {}
  
  create(createRestaurantDto: CreateRestaurantDto) {
    return 'This action adds a new restaurant';
  }

  async findAll() {
    return'this.restaurantsModel.arguments';
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
