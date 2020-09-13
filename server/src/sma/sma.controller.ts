import { Controller, Get, Param } from '@nestjs/common';
import axios from 'axios';
import { FundamentalsRepository } from './fundamentals.repository';
@Controller()
export class SMAController {
  constructor(private readonly fundamentalRepo: FundamentalsRepository) { }

  @Get('/balance-sheet/:id/:type')
  async balanceSheet(@Param() params) {
    return this.fundamentalRepo.balanceSheet(params.id, params.type);
  }

  @Get('/income/:id/:type')
  async income(@Param() params) {
    return this.fundamentalRepo.income(params.id, params.type);
  }


  @Get('/report/:id')
  async report(@Param() params) {
    return this.fundamentalRepo.report(params.id);
  }

  @Get('/peers/:id/')
  async peers(@Param() params) {
    return this.fundamentalRepo.peers(params.id);
  }


  @Get('/peers/report/:id/')
  async peersReport(@Param() params) {
    return this.fundamentalRepo.peersReport(params.id);
  }

  @Get('/holdings/:id')
  async holdings(@Param() params) {
    return this.fundamentalRepo.holdings(params.id);
  }

}
