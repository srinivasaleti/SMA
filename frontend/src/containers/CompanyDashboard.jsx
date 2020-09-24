import { Box, CircularProgress, Grid, Switch, Toolbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import axios from 'axios';
import { config } from '../config';
import { FinancialDetailsCard } from '../components/FinancialDetailsCard';
import { HoldingsCard } from '../components/HoldingsCard';
import { SubTitleTextTypography, TitleTextTypography } from '../components/typography';

export default function CompanyDashboard() {
  const [sid, setSid] = useState('RELI')
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData();
  }, [sid])


  async function getData() {
    setLoading(true)
    const response = await axios.get(config.url + "/report/" + sid);
    setData(response.data[sid]);
    setLoading(false)
  }

  return (
    <Box width="80%" m={"auto"}>
      <Box maxWidth={"400px"} mt={8} m={"auto"} >
        <SearchBar onChange={(sid) => {
          setSid(sid)
        }} />
      </Box>
      <Toolbar />
      <TitleTextTypography>{sid}</TitleTextTypography>

      {loading && <Box width={100} m={"auto"}><CircularProgress /></Box>}

      <Box m={"auto"} p={2} >
        <Box m={2}><SubTitleTextTypography >Financial</SubTitleTextTypography></Box>
        <Grid container spacing={8}>
          <Grid item md={3} xs={12}>
            <FinancialDetailsCard property={"ROE"} title={sid} data={{ report: data, name: 'ROE' }} suffix="%" />
          </Grid>
          <Grid item md={3} xs={12}>
            <FinancialDetailsCard property={'debtToEquityRatio'} title={sid} data={{ report: data, name: 'D/E' }} suffix="%" />
          </Grid>
          <Grid item md={3} xs={12}>
            <FinancialDetailsCard property={"eps"} title={sid} data={{ report: data, name: 'EPS' }} suffix="$" />
          </Grid>
          <Grid item md={3} xs={12}>
            <FinancialDetailsCard property={"workingCapitalRatio"} title={sid} data={{ report: data, name: 'Working Capital Ratio' }} suffix="%" />
          </Grid>
        </Grid>
        <Box m={8}>
          <Box m={2}><SubTitleTextTypography >Holdings</SubTitleTextTypography></Box>
          <HoldingsCard title={sid} data={{ report: data }} suffix="%" />
        </Box>
      </Box>
    </Box>
  )

}
