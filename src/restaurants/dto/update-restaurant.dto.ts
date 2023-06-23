import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsArray, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
    @IsArray()
    @IsString({ each: true })
  recipes: string[];

  @IsArray()
  @IsString({ each: true })
  address: string[];

  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(35)
  name: string;
}
