import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'
export async function insertRecipes(createRecipeDto, uniqueId): Promise<void> {
  
  const {name,ingredients} = createRecipeDto
  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: 'recipe',
    Item: {
      id: uniqueId,
      name: name,
      ingredients: ingredients,
    },
  };

  try {
    await dynamoDB.put(params).promise();
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}
