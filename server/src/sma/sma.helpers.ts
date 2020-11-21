export const ROE = (netIncome, shEquity) => {
  return (netIncome / shEquity) * 100;
};

export const shareHoldingEquity = (balanceSheetOfYear: any) => {
  return balanceSheetOfYear?.totalAsset - balanceSheetOfYear?.totalLiabilities;
};

export const debtToEquityRatio = (totalLiabilities, _shareHoldingEquity) => {
  return totalLiabilities / _shareHoldingEquity;
};

export const workingCapitalRatio = (currentAsset, currentLiabilities) => {
  return currentAsset / currentLiabilities;
};
