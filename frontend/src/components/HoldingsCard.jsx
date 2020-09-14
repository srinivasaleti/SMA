import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import { CardTitleTypography } from './typography';
import { floatUpto2Decimals } from './utils';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: '400px',
      color: theme.text.primary,
    },
    tableCell: {
      fontSize: '16px',
      fontWeight: 'bold',
      width: '200px'
    },
    tableHead: {
      fontWeight: 'bold',
      fontSize: '20px',
      width: '200px'
    }
  }
});


export const HoldingsCard = (props) => {
  const classes = useStyles();

  const holdings = props.data?.report?.holdings || [];
  const name = props.data?.name


  return (

    holdings.length ? (
      <TableContainer className={classes.root} component={Paper}>
        <CardTitleTypography>{name}</CardTitleTypography>
        <Table aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell className={classes.tableHead}>Date</TableCell>
              <TableCell className={classes.tableHead} align="center">Promoter</TableCell>
              <TableCell className={classes.tableHead} align="center">FII(g)</TableCell>
              <TableCell className={classes.tableHead} align="center">DII</TableCell>
              <TableCell className={classes.tableHead} align="center">MII</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              holdings?.map(holding => {
                return (
                  <TableRow key={name}>
                    <TableCell className={classes.tableCell} component="th" scope="row" align="right">
                      {new Date(holding.date).toDateString()}
                    </TableCell>
                    <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                      {floatUpto2Decimals(holding?.totalPromoterHolding)}
                    </TableCell>
                    <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                      {floatUpto2Decimals(holding?.foreignInstitutionalHoldings)}
                    </TableCell>
                    <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                      {floatUpto2Decimals(holding?.domesticInstitutionalHoldings)}
                    </TableCell>
                    <TableCell className={classes.tableCell} component="th" scope="row" align="center">
                      {floatUpto2Decimals(holding?.mutualFundHolding)}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer >
    ) : <div></div>
  )
}