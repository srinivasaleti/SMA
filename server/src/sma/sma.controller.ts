import { Controller, Get, Param } from '@nestjs/common';
import axios from 'axios';
import { FundamentalsRepository } from './balance.sheet.repository';
@Controller()
export class SMAController {
  constructor(private readonly fundamentalRepo:FundamentalsRepository) {}

  @Get('/balance-sheet/:id')
  async balanceSheet(@Param() params) {
    return this.fundamentalRepo.balanceSheet(params.id);
  }

  @Get('/income/:id')
  async income(@Param() params) {
    return this.fundamentalRepo.income(params.id);
  }

}
