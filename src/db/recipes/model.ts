import { DynamoDB } from 'aws-sdk';

export async function createRecipeTable(dynamoDB: DynamoDB): Promise<void> {
  const RecipeTableParams: DynamoDB.Types.CreateTableInput = {
    TableName: 'recipe',
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' },
    ],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  try {
    await dynamoDB.createTable(RecipeTableParams).promise();
    console.log('Tabla RecipeTable creada correctamente');
  } catch (error) {
    if (error.statusCode === 400) {
      // console.log('db ya existe', error)
      return 
    }
    console.error('Error al crear la tabla RecipeTable:', error);
  }
}