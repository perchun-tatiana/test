import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './names/names.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), NamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}