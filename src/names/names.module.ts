import { Module } from '@nestjs/common';
import { NamesController } from './names/names.controller';
import { NamesService } from './names/names.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Name, NameSchema,NameIndex, NameIndexSchema } from '../schemas/name.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Name.name, schema: NameSchema },{ name: NameIndex.name, schema: NameIndexSchema }]),
  ],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule {}
