import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateRestaurantDto {
    @IsArray()
    @IsString({ each: true })
  recipes: string[];

  @IsArray()
  @IsString({ each: true })
  address: string[];

  @IsString()
  name: string;
}
