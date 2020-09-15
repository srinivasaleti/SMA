import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FRGService } from './finance.report.service';
import { debtToEquityRatio, ROE, shareHoldingEquity } from './sma.helpers';
import { TickerTapeTransformer } from './tickertape.transformer';

@Injectable()
export class FundamentalsRepository {
  constructor(private tickerTapeTransformer: TickerTapeTransformer, private frgService: FRGService) { }
  // NOTE: type can be normal, growth
  async balanceSheet(id, type, count = 10) {
    const url = `https://api.tickertape.in/stocks/financials/balancesheet/${id}/annual/${type}?count=${count}`;
    const data = (await axios.get(url)).data;
    return this.tickerTapeTransformer.transformBalanceSheet(data);
  }

  async income(id, type, count = 10) {
    const url = `https://api.tickertape.in/stocks/financials/income/${id}/annual/${type}?count=${count}`;
    const data = (await axios.get(url)).data;
    return this.tickerTapeTransformer.transformIncomeStatement(data);
  }

  async peers(id) {
    const url = `https://api.tickertape.in/stocks/peers/${id}?tab=valuation`;
    const data = (await axios.get(url)).data;
    return data.data;
  }

  async peersReport(id) {
    const peersData = await this.peers(id);
    const peersDataMap = {};
    const promises = peersData.map(async x => {
      peersDataMap[x.sid] = x;
      return this.report(x.sid);
    });
    return await this.tickerTapeTransformer.transformPeersReport(promises, peersDataMap);
  }


  async holdings(id) {
    const url = `https://api.tickertape.in/stocks/holdings/${id}`;
    const response = await axios.get(url);
    const data = response?.data?.data;
    return this.tickerTapeTransformer.transformHoldings(data);
  }

  async search(text) {
    const url = `https://api.tickertape.in/search?text=${text}`;
    console.log(url)
    return (await axios.get(url)).data;
  }

  async report(id) {
    const promises = await Promise.all([
      this.income(id, 'normal'), this.balanceSheet(id, 'normal'), this.holdings(id)
    ]);
    const _incomeStatement = promises[0];
    const _balanceSheet = promises[1];

    const result = this.frgService.generateReport(_incomeStatement, _balanceSheet);
    return { [id]: { financials: result, holdings: promises[2] } };
  }

}