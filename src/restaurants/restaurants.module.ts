import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
// import { DynamoDBModule } from '@skypress/nestjs-dynamodb'
require('dotenv').config();
@Module({
  imports: [
    // DynamoDBModule.forRoot({
    //   AWSConfig: {
    //     region: 'us-west-2',
    //     accessKeyId: process.env.ACCESSKEYID,
    //     secretAccessKey: process.env.SECRETACCESSKEY,
    //   },
    //   dynamoDBOptions: undefined
    // })
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService]
})
export class RestaurantsModule {}
