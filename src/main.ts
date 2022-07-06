import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('inicio');
  const app = await NestFactory.create(AppModule);

  const opts = new DocumentBuilder()
    .setTitle('Videogame Ecommerce')
    .setDescription('Swagger')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const doc = SwaggerModule.createDocument(app, opts);

  SwaggerModule.setup('swagger', app, doc);

  await app.listen(3000);
}
bootstrap();
