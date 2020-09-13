import { Box, Card, List, ListItem, makeStyles } from '@material-ui/core';
import * as React from 'react'
import { CardTitleTypography } from './typography';
import { floatUpto2Decimals } from './utils';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '300px',
      minHeight: '200px',
      fontSize: '15px',
      backgroundColor: '#333333',
      color: 'white',
    },
    list: {
      height: '400px',
      overflow: 'scroll'
    },
    listItem: {
      display: 'flex',
      width: '400',
      justifyContent: 'space-between'
    }
  }
});


export const FinancialDetailsCard = (props) => {
  const classes = useStyles();

  const report = props.data?.report?.financials || {};
  const name = props.data?.name
  return (
    <Card className={classes.root}>
      <CardTitleTypography>{name}</CardTitleTypography>
      <List className={classes.list}>
        {Object.keys(report).map(year => {
          return (
            <ListItem key={year} className={classes.listItem}>
              <h3>{year}</h3>
              <h4>{floatUpto2Decimals(report[year][props.property])} {props.suffix}</h4>
            </ListItem>
          )
        })}
      </List>
    </Card>
  )
}
