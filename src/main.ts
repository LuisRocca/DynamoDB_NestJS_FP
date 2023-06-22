import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentacion del API manejos de bebidas')
    .setDescription('Guia de peticiones para el uso del API para el consumo del servicio de bebidas del app Cocktals.app')
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
