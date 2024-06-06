import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type NameDocument = mongoose.HydratedDocument<Name>;

@Schema()
export class Name {
  @Prop({ required: true })
  name: string;
}

export const NameSchema = SchemaFactory.createForClass(Name);


export type NameIndexDocument = mongoose.HydratedDocument<NameIndex>;

@Schema()
export class NameIndex {
  @Prop({ required: true, index:true})
  name: string;
}

export const NameIndexSchema = SchemaFactory.createForClass(NameIndex);