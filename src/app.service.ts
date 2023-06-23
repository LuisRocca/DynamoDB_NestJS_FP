import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { createRecipeTable } from 'src/db/recipes/model'
import { createRestaurantTable } from './db/restaurants/model';

@Injectable()
export class AppService {
  private readonly dynamoDBClinet: DynamoDB;

  constructor() {
    this.dynamoDBClinet = new DynamoDB(); 
    this.createTable()
  }
  
  async createTable(): Promise<void> {
      await createRecipeTable(this.dynamoDBClinet)
      await createRestaurantTable(this.dynamoDBClinet)  
  }

  getHello(): string {
    return 'Hello World!';
  }
}
