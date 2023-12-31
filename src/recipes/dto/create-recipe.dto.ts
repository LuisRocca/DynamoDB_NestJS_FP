import { IsArray, IsString } from "class-validator";

export class CreateRecipeDto {
    @IsArray()
    @IsString({ each: true })
    ingredients: string[];
  
    @IsString()
    name: string;
}
