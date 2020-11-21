import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SMAModule} from './sma/sma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SMAModule],
})
export class AppModule {}
