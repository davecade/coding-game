import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { AppRepository } from './app.repository';

@Module({
  imports: [
    ...(process.env.NODE_ENV === 'production'
      ? [
          ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client/build'),
          }),
        ]
      : []),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
