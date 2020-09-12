import { Injectable } from '@nestjs/common';

@Injectable()
export class TickerTapeTransformer {
  transformBalanceSheet(data: any) {
    return data?.data.map(x => {
      return {
        displayPeriod: x.displayPeriod,
        totalAsset: x.balTota,
        totalLiabilities: x.balTotl,
        totalEquity: x.balTeq,
        totalLibalitiesAndShareEquity: x.balTlse,
        totalCommonSharesOutstanding: x.balTcso
      };
    });
  }


  transformIncomeStatement(data: any) {
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