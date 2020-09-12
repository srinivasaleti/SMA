import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ROE, shareHoldingEquity } from './sma.helpers';
import { TickerTapeTransformer } from './tickertape.transformer';

@Injectable()
export class FundamentalsRepository {
  constructor(private tickerTapeTransformer: TickerTapeTransformer) { }
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
    const promises = peersData.map(async x => {
      return this.report(x.sid);
    });

    const peersReport = await Promise.all(promises);

    return peersReport.reduce((acc: any, curr: any) => {
      const key = Object.keys(curr)[0];
      const result = curr[key];

      return { ...acc, [key]: result };
    }, {});
  }

  async report(id) {
    const promises = await Promise.all([this.income(id, 'normal'), this.balanceSheet(id, 'normal')]);
    const incomeStatement = promises[0].reduce((acc, curr) => {
      const displayPeriod = curr.displayPeriod;
      return { ...acc, [displayPeriod.split(' ')[1]]: curr };
    }, {});
    const balanceSheet = promises[1].reduce((acc, curr) => {
      const displayPeriod = curr.displayPeriod;
      return { ...acc, [displayPeriod.split(' ')[1]]: curr };
    }, {});
    const result = {};

    Object.keys(incomeStatement).map(x => {
      const incomeStatementOfYear = incomeStatement[x];
      const balanceSheetOfYear = balanceSheet[x];
      const _shareHoldingEquity = shareHoldingEquity(balanceSheetOfYear);
      const netIncome = incomeStatementOfYear.netIncome;
      result[x] = {
        netIncome: incomeStatementOfYear.netIncome,
        totalAsset: balanceSheetOfYear.totalAsset,
        totalLiabilities: balanceSheetOfYear.totalLiabilities,
        shareHoldingEquity: _shareHoldingEquity,
        ROE: ROE(netIncome, _shareHoldingEquity)
      };
    });
    return { [id]: result };
  }

}