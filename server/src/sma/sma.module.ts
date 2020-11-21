import {Module} from '@nestjs/common';
import {FundamentalsRepository} from './fundamentals.repository';
import {SMAController} from './sma.controller';
import {TickerTapeTransformer} from './tickertape.transformer';
import {FRGService} from './finance.report.service';

@Module({
  controllers: [SMAController],
  providers: [FundamentalsRepository, TickerTapeTransformer, FRGService],
})
export class SMAModule {}
