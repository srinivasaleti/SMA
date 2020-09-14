import { Box, makeStyles } from '@material-ui/core';
import * as React from 'react'
import { ParaTypography, SubTitleTextTypography, TitleTextTypography } from '../components/typography';
import { KeyTakeaways } from '../components/KeyTakeaways';
import PeersReport from './PeersReport';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: 'auto',
      minHeight: '70vh',
      fontSize: '15px'
    },
    content: {
      maxWidth: '70%',
      margin: 'auto'
    }
  }
});


export const ShareHoldersEquity = (props) => {
  const classes = useStyles();

  const keyTakeaways = [
    "owners' residual claim on assets after debts have been paid. Shareholders’ equity=total assets−total liabilities",
    "Shareholder equity can be either negative or positive. If positive, the company has enough assets to cover its liabilities. If negative, the company's liabilities exceed its assets; if prolonged, this is considered balance sheet insolvency.",
  ]

  const data = props.peersData;
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <TitleTextTypography variant="h1"> Share Holders Equity </TitleTextTypography>
        <Box m={4}>
          <SubTitleTextTypography variant="h2">What Is Return on Share Holders Equity (SE)?</SubTitleTextTypography>
          <ParaTypography variant="body1">For corporations, shareholder equity (SE), also referred to as shareholders' equity and stockholders' equity, is the corporation's owners' residual claim on assets after debts have been paid. Equity is equal to a firm's total assets minus its total liabilities..</ParaTypography>
        </Box>
        <Box m={4}>
          <SubTitleTextTypography variant="h2">What Shareholder Equity Can Tell You?</SubTitleTextTypography>
          <ParaTypography variant="body1" >Shareholder equity can be either negative or positive. If positive, the company has enough assets to cover its liabilities. If negative, the company's liabilities exceed its assets; if prolonged, this is considered balance sheet insolvency.</ParaTypography>
          <ParaTypography variant="body1" >For this reason, many investors view companies with negative shareholder equity as risky or unsafe investments. Shareholder equity alone is not a definitive indicator of a company's financial health; used in conjunction with other tools and metrics, the investor can accurately analyze the health of an organization.</ParaTypography>
          <ParaTypography variant="body1" >All the information needed to compute a company's shareholder equity is available on its balance sheet. Total assets include current and non-current assets. Current assets are assets that can be converted to cash within a year (e.g., cash, accounts receivable, inventory, et al.). Long-term assets are assets that cannot be converted to cash or consumed within a year (e.g. investments; property, plant, and equipment; and intangibles, such as patents).</ParaTypography>
          <ParaTypography variant="body1" >Total liabilities consist of current and long-term liabilities. Current liabilities are debts typically due for repayment within one year (e.g. accounts payable and taxes payable). Long-term liabilities are obligations that are due for repayment in periods longer than one year (e.g., bonds payable, leases, and pension obligations). Upon calculating the total assets and liabilities, shareholder equity can be determined.</ParaTypography>
          <ParaTypography variant="body1" >Shareholder equity is an important metric in determining the return being generated versus the total amount invested by equity investors. For example, ratios like return on equity (ROE), which is the result of a company's net income divided by shareholder equity, is used to measure how well a company's management is using its equity from investors to generate profit.</ParaTypography>
        </Box>

        <KeyTakeaways title={"ROE"} keyTakeaways={keyTakeaways} />
      </Box>
      <PeersReport data={data} property="shareHoldingEquity" suffix="cr" type='FINANCIALS' />
    </Box>
  )
}