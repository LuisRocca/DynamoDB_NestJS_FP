import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { createRecipeTable } from 'src/db/recipes/model'
import { createRestaurantTable } from './db/restaurants/model';

@Injectable()
export class AppService {
  private readonly dynamoDBClinet: DynamoDB;
  private readonly dynamoDB: DocumentClient;

  constructor() {
    this.dynamoDBClinet = new DynamoDB(); 
    this.dynamoDB = new DynamoDB.DocumentClient();
    // this.createTable()
  }
  

  async createTable(): Promise<void> {
    await createRecipeTable(this.dynamoDBClinet)
    await createRestaurantTable(this.dynamoDBClinet)
  }

  // async queryData(): Promise<void> {
  //   const params: DynamoDB.DocumentClient.QueryInput = {
  //     TableName: 'exampleTable',
  //     KeyConditionExpression: 'id = :id',
  //     ExpressionAttributeValues: {
  //       ':id': 1,
  //     },
  //   };

  //   try {
  //     const result = await this.dynamoDB.query(params).promise();
  //     console.log('Datos consultados:', result.Items);
  //   } catch (error) {
  //     console.error('Error al consultar datos:', error);
  //   }
  // }

  getHello(): string {
    // this.insertData()
    // this.queryData()
    return 'Hello World!';
  }
}
