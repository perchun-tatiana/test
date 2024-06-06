import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Name, NameIndex } from '../../schemas/name.schema';
import { randomBytes } from 'crypto';

@Injectable()
export class NamesService {
  constructor(@InjectModel(Name.name) private nameModel: Model<Name>,
  @InjectModel(NameIndex.name) private nameIndexModel: Model<NameIndex>) {}

  async create(): Promise<Name[]> {
    let createdName;
    for (let j = 0; j < 10000000; j++) {
      console.log('j', j);
      let record = {
        name: randomBytes(20).toString('hex'),
      }
        const createdName = new this.nameModel(record);
      await createdName.save();

      const createdNameIndex = new this.nameIndexModel(record);
      await createdNameIndex.save();
    }
    return createdName;
  }

  async findAll(): Promise<Name[]> {
    return this.nameModel.find().exec();
  }

   async findOneCheck(name: string): Promise<Name> {

    function checkTime(model){

      let startDate: Date = new Date()

      let record =  model.findOne({ name: name }).exec()
      let enddate: Date =  new Date()
  
      let time: number = enddate.getTime() - startDate.getTime()
  
      console.log('time',time)
return record  
    }

    let record1 = checkTime(this.nameModel)
    let record2 = checkTime(this.nameIndexModel)

    return record1;
  }
  async findOne(name: string): Promise<Name> {
    return await this.nameModel.findOne({ name: name }).exec();
  }
}
