import { Box, makeStyles } from '@material-ui/core';
import * as React from 'react'
import { ParaTypography, SubTitleTextTypography, TitleTextTypography } from './typography';
import { KeyTakeaways } from './KeyTakeaways';
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


export const ROE = (props) => {
  const classes = useStyles();

  const keyTakeaways = [
    "Return on equity (ROE) measures how effectively management is using a company’s assets to create profits.",
    "Whether an ROE is considered satisfactory will depend on what is normal for the industry or company peers.",
    "As a shortcut, investors can consider an ROE near the long-term average of the S&P 500 (14%) as an acceptable ratio and anything less than 10% as poor.",
    "A good rule of thumb is to target an ROE that is equal to or just above the average for the peer group. For example, assume a company, TechCo, has maintained a steady ROE of 18% over the last few years compared to the average of its peers, which was 15%.",
    "ROE of 20% is better than ROE of 12%",
    "Consistent increasing in ROE over last 5 to 10 years is a good stock."
  ]

  const data = props.peersData;
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <TitleTextTypography variant="h1"> ROE </TitleTextTypography>
        <Box m={4}>
          <SubTitleTextTypography variant="h2">What Is Return on Equity (ROE)?</SubTitleTextTypography>
          <ParaTypography variant="body1">How much profit generated by shareholders money. Return on equity (ROE) measures how effectively management is using a company’s assets to create profits.</ParaTypography>
        </Box>
        <Box m={4}>
          <SubTitleTextTypography variant="h2">What Does ROE Tell You?</SubTitleTextTypography>
          <ParaTypography variant="body1" >A good rule of thumb is to target an ROE that is equal to or just above the average for the peer group. For example, assume a company, TechCo, has maintained a steady ROE of 18% over the last few years compared to the average of its peers, which was 15%. As a shortcut, investors can consider an ROE near the long-term average of the S&P 500 (14%) as an acceptable ratio and anything less than 10% as poor.</ParaTypography>
        </Box>

        <KeyTakeaways title={"ROE"} keyTakeaways={keyTakeaways} />
      </Box>
      <PeersReport data={data} property="ROE" suffix="%" />
    </Box>
  )
}