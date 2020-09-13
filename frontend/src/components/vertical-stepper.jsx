import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ROE } from './ROE';
import { config } from '../config';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ShareHoldersEquity } from './ShareHoldersEquity';
import { DERatio } from './DERatio';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      height: 100,
    },
    stepper: {
      backgroundColor: theme.backgroundColor
    },
    stepLabel: {
      fontSize: '20px',
      color: theme.text.primary,
      fontWeight: '500'
    },
    button: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(3),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },

    resetContainer: {
      padding: theme.spacing(3),
    },
  }
});



function getSteps() {
  return ['Share Holders Equity', 'ROE', 'Debt To Equity Ratio', 'Create an ad'];
}

function getStepContent(step, peersData) {
  switch (step) {
    case 0:
      return <ShareHoldersEquity peersData={peersData} />;
    case 1:
      return <ROE peersData={peersData} />;
    case 2:
      return <DERatio peersData={peersData} />;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [peersData, setPeersData] = useState({})

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const params = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getReport = async (id) => {
    const url = config.url;
    const response = await axios.get(`${url}/peers/report/${params.id}`)
    setPeersData(response.data);

  }

  useEffect(() => {
    getReport(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepper} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><h1 className={classes.stepLabel}>{label}</h1></StepLabel>
            <StepContent className={classes.stepLabel}>
              <Typography>{getStepContent(index, peersData)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    variant="contained"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}