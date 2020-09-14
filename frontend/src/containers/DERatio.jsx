import { Box, makeStyles } from '@material-ui/core';
import * as React from 'react'
import { ParaTypography, SubTitleTextTypography, TitleTextTypography } from '../components/typography';
import { KeyTakeaways } from '../components/KeyTakeaways';
import PeersReport from './PeersReport';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: '1200px',
      margin: 'auto',
      overflow: 'none',
      minHeight: '70vh',
      fontSize: '15px'
    }
  }
});


export const DERatio = (props) => {
  const classes = useStyles();

  const keyTakeaways = [
    "The debt-to-equity (D/E) ratio compares a company’s total liabilities to its shareholder equity and can be used to evaluate how much leverage a company is using.",
    "Higher leverage ratios tend to indicate a company or stock with higher risk to shareholders.",
    "However, the D/E ratio is difficult to compare across industry groups where ideal amounts of debt will vary.",
    "Investors will often modify the D/E ratio to focus on long-term debt only because the risk of long-term liabilities are different than for short-term debt and payables.",
    "D/E with more than 1% is dangerous"
  ]

  const data = props.data;

  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <TitleTextTypography variant="h1"> Debt To Equity Ratio </TitleTextTypography>
        <Box m={4}>
          <SubTitleTextTypography variant="h2">Debt To Equity Ratio (D/E)?</SubTitleTextTypography>
          <ParaTypography variant="body1">The debt-to-equity (D/E) ratio is calculated by dividing a company’s total liabilities by its shareholder equity. These numbers are available on the balance sheet of a company’s financial statements.</ParaTypography>
          <ParaTypography variant="body1">The ratio is used to evaluate a company's financial leverage. The D/E ratio is an important metric used in corporate finance. It is a measure of the degree to which a company is financing its operations through debt versus wholly-owned funds. More specifically, it reflects the ability of shareholder equity to cover all outstanding debts in the event of a business downturn.</ParaTypography>
        </Box>
        <Box m={4}>
          <SubTitleTextTypography variant="h2">What Does D/E Tell You?</SubTitleTextTypography>
          <ParaTypography variant="body1" >A high debt/equity ratio is often associated with high risk; it means that a company has been aggressive in financing its growth with debt.</ParaTypography>
          <ParaTypography variant="body1" >If a lot of debt is used to finance growth, a company could potentially generate more earnings than it would have without that financing. If leverage increases earnings by a greater amount than the debt’s cost (interest), then shareholders should expect to benefit. However, if the cost of debt financing outweighs the increased income generated, share values may decline. The cost of debt can vary with market conditions. Thus, unprofitable borrowing may not be apparent at first.</ParaTypography>
        </Box>

        <KeyTakeaways title={"D/E"} keyTakeaways={keyTakeaways} />
      </Box>
      <PeersReport data={data} property="debtToEquityRatio" suffix="%" type='FINANCIALS' />
    </Box>
  )
}