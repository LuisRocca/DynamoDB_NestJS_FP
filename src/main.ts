import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth() // <-- icono bearer Token JWT
    .setTitle('Documentacion del API Recomendaciones de Platillos y restaurantes')
    .setDescription('El objetivo de esta api es armar un pequeño servicio donde las personas puedan ingresar ingredientes que le provoquen comer el dia de hoy y este le de una guia de recetas para que el usuario las prepare o de lo contrario si gusta puede buscar restaurantes que venden estos platillos que este dentro de nuestra sociedad de restaurantes asociados al proyecto ')
    .setVersion('1.0')
    .addTag('recipes')
    .addTag('restaurants')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
