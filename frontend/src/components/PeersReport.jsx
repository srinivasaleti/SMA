import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FinancialDetailsCard } from './FinancialDetailsCard';
import { HoldingsCard } from './HoldingsCard';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'scroll',
    margin: 'auto'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export default function PeersReport(props) {
  const classes = useStyles();
  const type = props.type;
  const data = props.data || {};

  const getCard = (id) => {
    if (type === 'FINANCIALS') {
      return <FinancialDetailsCard property={props.property} title={id} data={data[id]} suffix={props.suffix} />
    }
    if (type === 'HOLDING') {
      return <HoldingsCard property={props.property} title={id} data={data[id]} suffix={props.suffix} />
    }
  }

  return (
    <div className={classes.root}>
      {Object.keys(props?.data).map((id) => (
        <Box m={1} >
          {getCard(id)}
        </Box>
      ))}
    </div>
  );
}