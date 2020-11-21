import {Injectable} from '@nestjs/common';
import {debtToEquityRatio, ROE, shareHoldingEquity, workingCapitalRatio} from './sma.helpers';

@Injectable()
export class FRGService {
  generateReport(_incomeStatement: any, _balanceSheet: any) {
    const incomeStatement = _incomeStatement.reduce((acc, curr) => {
      const displayPeriod = curr.displayPeriod;
      return {...acc, [displayPeriod.split(' ')[1]]: curr};
    }, {});
    const balanceSheet = _balanceSheet.reduce((acc, curr) => {
      const displayPeriod = curr.displayPeriod;
      return {...acc, [displayPeriod.split(' ')[1]]: curr};
    }, {});
    const financials = {};

    Object.keys(incomeStatement).map(x => {
      const incomeStatementOfYear = incomeStatement[x];
      const balanceSheetOfYear = balanceSheet[x];
      const _shareHoldingEquity = shareHoldingEquity(balanceSheetOfYear);
      const netIncome = incomeStatementOfYear?.netIncome;
      const totalLiabilities = balanceSheetOfYear?.totalLiabilities;
      financials[x] = {
        netIncome: incomeStatementOfYear?.netIncome,
        eps: incomeStatementOfYear?.eps,
        dps: incomeStatementOfYear?.dps,
        totalAsset: balanceSheetOfYear?.totalAsset,
        totalLiabilities: balanceSheetOfYear?.totalLiabilities,
        currentAsset: balanceSheetOfYear?.currentAsset,
        currentLiabilities: balanceSheetOfYear?.currentLiabilities,
        workingCapitalRatio: workingCapitalRatio(
          balanceSheetOfYear?.currentAsset,
          balanceSheetOfYear?.currentLiabilities,
        ),
        shareHoldingEquity: _shareHoldingEquity,
        ROE: ROE(netIncome, _shareHoldingEquity),
        debtToEquityRatio: debtToEquityRatio(totalLiabilities, _shareHoldingEquity),
      };
    });
    return financials;
  }
}
