import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import formLogo from './onboarding/Images/formlogo.PNG';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { alpha, styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const steps = [1, 2, 3, 4];

const theme = createTheme();

theme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}
theme.typography.h6 = {
  fontSize: '0.813rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
  };
  const totalSteps = () => {
    return steps.length;
  };
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(102, 153, 153) 0%, rgb(179, 204, 204) 50%,rgb(224, 235, 235)100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(102, 153, 153) 0%, rgb(179, 204, 204) 50%,rgb(224, 235, 235)100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 2,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgb(117, 163, 163)' : 'rgb(240, 245, 245)',
      borderRadius: 1,
    },

  }));

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '300px',
      padding: '10px 12px',
      [theme.breakpoints.up('md')]: {
        width: '400px',
      },
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const WorkPlaceButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: "#664DE5",
    width: '300px',
    [theme.breakpoints.up('md')]: {
      width: '330px',
    },
    height: '45px',
    fontSize: '13px',
    '&:hover': {
      backgroundColor: purple[500],
    },
  }));
  const WorkspaceURL = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      backgroundColor: 'red'
    }

  }))
  const NewPaper = styled(Paper)(({ theme }) => ({
    width: '200px',
    height: '200px',
    padding: '10px',
    cursor: 'pointer',
    '&:active': {
      border: '1px solid #664DE5',
      color: '#664DE5'
    },
  }))

  // rgb(98, 73, 227)
  console.log("active step----", activeStep)
  return (
    <Grid containter>

      <Grid container
        direction="row" justifyContent="center"
        alignItems="center" mt={4}>
        <Grid item>
          <img
            className="benefits-details-image"
            src={formLogo}
            alt="logo"
          ></img>
        </Grid>
        <Grid item>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Eden
          </Typography>
        </Grid>
      </Grid>
      <Grid container
        direction="row" justifyContent="center"
        alignItems="center" mt={4}>
        <Grid item xs={3}>
          <Stepper nonLinear activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)}>
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
      <Grid>
        {activeStep === 0 && (
          <Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={5}>
              <Grid item xs={12}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>Welcome! First things first...</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} mt={2} >
                <ThemeProvider theme={theme}>
                  <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 600 }}>You can always change them later.</Typography>
                </ThemeProvider>
              </Grid>

            </Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={3}>
              <Grid item xs={8} mt={2}>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Full Name
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={8} mt={2}>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Display Name
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={8} mt={5}>
                <WorkPlaceButton variant="contained">Create Workspace</WorkPlaceButton>
              </Grid>
            </Grid>
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={5}>
              <Grid item xs={12}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>Let's set up a home for all your work</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} mt={2} >
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 600 }}>You can always create another workspace later.</Typography>
                </ThemeProvider>
              </Grid>

            </Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={3}>
              <Grid item xs={8} mt={2}>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Workspace Name
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                </FormControl>
              </Grid>
              <Grid item xs={8} mt={2}>
                <FormControl variant="standard">
                  <InputLabel shrink htmlFor="bootstrap-input">
                    Workspace URL (Optional)
                  </InputLabel>
                  <BootstrapInput id="bootstrap-input" />
                  {/* <BootstrapInput id="bootstrap-input" startAdornment={
                    <InputAdornment position="start">
                      <Button>abcd</Button>
                    </InputAdornment>
                  } /> */}
                </FormControl>
              </Grid>
              <Grid item xs={8} mt={5}>
                <WorkPlaceButton variant="contained">Create Workspace</WorkPlaceButton>
              </Grid>
            </Grid>
          </Grid>
        )}
        {activeStep === 2 && (
          <Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={5}>
              <Grid item xs={12}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>How are you planning to use Eden ?</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} mt={2} >
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 600 }}>We'll streamline your setup experience accordingly.</Typography>
                </ThemeProvider>
              </Grid>

            </Grid>
            <Grid container direction="row" justifyContent="center"
              alignItems="center" mt={3} spacing={3}>
              <Grid item xs={12} sm={4} md={2} ml={{ xs: 10, sm: 0, md: 0 }}>
                <NewPaper elevation={3} value={0}>
                  <Grid item mb={4}>
                    <PersonRoundedIcon value={0} sx={{ fontSize: "30px" }} />
                  </Grid>
                  <Grid item mb={4}>
                    <Typography sx={{ fontWeight: 600, fontSize: 'initial' }} >For myself</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: 'initial' }}>Write better. Think more clearly.Stay Organized.</Typography>
                  </Grid>
                </NewPaper>
              </Grid>
              <Grid item xs={12} sm={4} md={2} ml={{ xs: 10, sm: 0, md: 0 }}>
                <NewPaper elevation={3} value={1}>
                  <Grid item mb={4}>
                    <GroupsRoundedIcon value={1} sx={{ fontSize: "30px" }} />
                  </Grid>
                  <Grid item mb={2}>
                    <Typography sx={{ fontWeight: 600, fontSize: 'initial' }} >With my team</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ color: 'text.secondary', fontWeight: 500, fontSize: 'initial' }}>Wikis,docs,tasks & projects,all in one place.</Typography>
                  </Grid>
                </NewPaper>
              </Grid>
            </Grid>
            <Grid container direction="column" justifyContent="center"
              alignItems="center">
              <Grid item xs={8} mt={3}>
                <WorkPlaceButton variant="contained">Create Workspace</WorkPlaceButton>
              </Grid>
            </Grid>
          </Grid>
        )}
        {activeStep === 3 && (
          <Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={10}>
              <Grid item xs={12}>
                <CheckCircleRoundedIcon sx={{ fontSize: "70px", color: '#664DE5' }} /></Grid>
              <Grid item xs={12} mt={2}>
                <Typography variant="h5" sx={{ fontWeight: 500 }}>Congratulations,Eren!</Typography>
              </Grid>
              <Grid item xs={12} sm={2} md={8} mt={2} >
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 600 }}>You have completed onboarding,you can start using the Eden.</Typography>
                </ThemeProvider>
              </Grid>
            </Grid>
            <Grid container
              direction="column" justifyContent="center"
              alignItems="center" mt={5}>
              <Grid item xs={8} sm={12} mt={5}>
                <WorkPlaceButton variant="contained">Launch Eden</WorkPlaceButton>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
