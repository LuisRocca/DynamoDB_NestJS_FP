import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
// import { DynamoDBModule } from 'nestjs-dynamodb';
require('dotenv').config();

@Module({
  // imports: [DynamoDBModule.forRoot({
  //   AWSConfig: {
  //     region: 'us-west-2',
  //     accessKeyId: process.env.ACCESSKEYID,
  //     secretAccessKey: process.env.SECRETACCESSKEY,
  //   },
  //   dynamoDBOptions: undefined
  // })],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}
