import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //pongo prefijo de /api/v2
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      // transforma los datos en el tipo deseado
      transformOptions:{
        enableImplicitConversion: true
      }
    })
  );

  await app.listen(process.env.PORT);
  
}
bootstrap();
