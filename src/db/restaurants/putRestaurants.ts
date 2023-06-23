import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'

export async function insertRestaurants(createRestaurantDto,uniqueId): Promise<void> {
  const {name , recipes, address} = createRestaurantDto
  const params: DynamoDB.DocumentClient.PutItemInput = {
    TableName: 'restaurant',
    Item: {
      id: uniqueId,
      name: name,
      recipes: recipes,
      address: address
    },
  };

  try {
    await dynamoDB.put(params).promise();
    console.log('Datos insertados correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  }
}
