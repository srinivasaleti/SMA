import {Module} from '@nestjs/common';
import { FundamentalsRepository } from './balance.sheet.repository';
import { SMAController } from './sma.controller';
import { TickerTapeTransformer } from './tickertape.transformer';

@Module({
  controllers: [SMAController],
  providers: [FundamentalsRepository, TickerTapeTransformer]
})
export class SMAModule {}
