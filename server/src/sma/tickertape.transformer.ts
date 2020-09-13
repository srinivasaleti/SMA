import { Injectable } from '@nestjs/common';

@Injectable()
export class TickerTapeTransformer {
  transformBalanceSheet(data: any) {
    return data?.data?.map(x => {
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
    return data?.data?.map(x => {
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


  async transformPeersReport(promises: any, peersDataMap: {}) {
    const peersReport = await Promise.all(promises);
    return peersReport.reduce((acc: any, curr: any) => {
      const key = Object.keys(curr)[0];
      const result = curr[key];

      return { ...acc, [key]: { report: result, ...peersDataMap[key] } };
    }, {});
  }


  async transformHoldings(data: any) {
    return data.map(x => {
      const _data = x.data;
      return {
        date: x?.date,
        data: {
          'totalPromoterHolding': _data.pmPctT,
          'mPctP': _data.pmPctP,
          'plPctT': _data.plPctT,
          'mutualFundHolding': _data.mfPctT,
          'isPctT': _data.isPctT,
          'DomesticInstitutionalHoldings': _data.diPctT,
          'foreignInstitutionalHoldings': _data.fiPctT,
        }
      };
    });
  }

}