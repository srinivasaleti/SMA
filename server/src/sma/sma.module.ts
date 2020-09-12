import {Module} from '@nestjs/common';
import { FundamentalsRepository } from './balance.sheet.repository';
import { SMAController } from './sma.controller';

@Module({
  controllers: [SMAController],
  providers: [FundamentalsRepository]
})
export class SMAModule {}
