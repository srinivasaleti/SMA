import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FundamentalsRepository {
  async balanceSheet(id) {
    const data = (await axios.get(`https://api.tickertape.in/stocks/financials/balancesheet/${id}/annual/normal?count=10`)).data;

    return data?.data.map(x => {
      return {
        displayPeriod: x.displayPeriod,
        totalAsset: x.balTota,
        nonCurrentAsset: x.balTotl,
        totalEquity: x.balTeq,
        totalLibalitiesAndShareEquity: x.balTlse,
        totalCommonSharesOutstanding: x.balTcso
      };
    });
  }

  async income(id) {
    const data = (await axios.get(`https://api.tickertape.in/stocks/financials/income/${id}/annual/normal?count=10`)).data;

    return data?.data.map(x => {
      return {
        displayPeriod: x.displayPeriod,
        totalRevenue: x.incTrev,
        ebitda: x.incEbi,
        pbit: x.incPbi,
        pbt: x.incPbt,
        netIncome: x.incNinc,
        eps: x.incEps,
        dps: x.incDps,
        payout: x.incPyr
      };
    });
  }
}