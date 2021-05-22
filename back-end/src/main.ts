import 'dotenv/config';
import 'module-alias/register';
import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ValidationPipe } from '@nestjs/common';
import { urlencoded, json } from 'express';
import { AppModule } from './app/app.module';
import * as redisIoAdapter from 'socket.io-redis';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as cookieParser from 'cookie-parser';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number): any {
    const server = super.createIOServer(port);

    const redisAdapter = redisIoAdapter({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      auth_pass: process.env.REDIS_PASSWORD,
    });

    redisAdapter.prototype.on('error', function (e) {
      console.error('Redis adapter error: ', e);
    });

    server.adapter(redisAdapter);

    return server;
  }
}

const port = process.env.PORT || 8080;

const validationOptions = {
  skipMissingProperties: true,
  validationError: { target: false },
};

const options = {
  origin: process.env.FRONT_URL,
  methods: 'POST',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    helmet({
      contentSecurityPolicy:
        process.env.NODE_ENV === 'production' ? undefined : false,
    }),
  );

  app.use(
    rateLimit({
      windowMs: 5 * 60 * 1000, // 5 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
    }),
  );

  app.use(json({ limit: '50mb' }));

  app.use(urlencoded({ extended: true, limit: '50mb' }));

  app.enableCors(options);

  app.use(cookieParser());

  app.useWebSocketAdapter(new RedisIoAdapter(app));

  app.useGlobalPipes(new ValidationPipe(validationOptions));

  await app.listen(port);
}

bootstrap();
