import { Box, Card, List, ListItem, makeStyles } from '@material-ui/core';
import * as React from 'react'
import { CardTitleTypography } from './typography';

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


export const DetailsCard = (props) => {
  const classes = useStyles();

  const report = props.data?.report || {};
  const name = props.data?.name
  return (
    <Card className={classes.root}>
      <CardTitleTypography>{name}</CardTitleTypography>
      <List className={classes.list}>
        {Object.keys(report).map(year => {
          return (
            <ListItem key={year} className={classes.listItem}>
              <h3>{year}</h3>
              <h4>{Number(report[year][props.property]).toFixed(2)} {props.suffix}</h4>
            </ListItem>
          )
        })}
      </List>
    </Card>
  )
}