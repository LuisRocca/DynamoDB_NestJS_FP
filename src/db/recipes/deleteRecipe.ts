import { DynamoDB } from 'aws-sdk';
import { dynamoDB } from '../client'
export async function deleteRecipe(uniqueId: string): Promise<boolean> {
    const params: DynamoDB.DocumentClient.DeleteItemInput = {
      TableName: 'recipe',
      Key: {
        id: uniqueId,
      },
    };
  
    try {
      await dynamoDB.delete(params).promise();
      console.log('Registro eliminado correctamente');
      return true
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      return false
    }
  }
  