import { IsArray, IsString } from "class-validator";

export class IngredientsRecipeDto {
    @IsArray()
    @IsString({ each: true })
    ingredients: string[];
}