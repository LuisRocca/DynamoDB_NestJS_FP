import { IsArray, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateRestaurantDto {
  @IsArray()
  @IsString({ each: true })
  recipes: string[];

  @IsArray()
  @IsString({ each: true })
  address: string[];

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(35)
  name: string;
}
