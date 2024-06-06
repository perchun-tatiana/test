import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { NamesService } from './names.service';
import { IName } from '../../interfaces/name.interface';
import { Name } from '../../schemas/name.schema';


@Controller('names')
export class NamesController {
  constructor(private namesService: NamesService) {}

  @Post()
  create(): Promise<Name[]> {
    return this.namesService.create();
  }

  @Get()
  findAll(): Promise<IName[]> {
    return this.namesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: Record<string, string>, @Query() query: Record<string, string>): Promise<IName> {
    if (query.test){
      return this.namesService.findOneCheck(params.id);

    }else{
      return this.namesService.findOne(params.id);

    }
  }
}
