import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path'
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [
    ...(process.env.NODE_ENV === 'production' ?
    [ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build'),
    })] : []),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
