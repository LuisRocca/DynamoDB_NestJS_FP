import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoDBModule } from 'nestjs-dynamodb';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RecipesModule } from './recipes/recipes.module';
require('dotenv').config();

@Module({
  imports: [  
    DynamoDBModule.forRoot({
      AWSConfig: {
        region: process.env.REGION,
        accessKeyId: process.env.ACCESSKEYID,
        secretAccessKey: process.env.SECRETACCESSKEY,
      },
      dynamoDBOptions: undefined
    }),
     RestaurantsModule, RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
