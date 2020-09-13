export const ROE = (netIncome, shareHoldingEquity) => {
  return (netIncome / shareHoldingEquity) * 100;
};

export const shareHoldingEquity = (balanceSheetOfYear: any) => {
  return balanceSheetOfYear?.totalAsset - balanceSheetOfYear?.totalLiabilities;
};

export const debtToEquityRatio = (totalLiabilities, _shareHoldingEquity) => {
  return totalLiabilities / _shareHoldingEquity;
}