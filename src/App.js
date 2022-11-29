import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AccessTimeFilledOutlinedIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import { createTheme, styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const inputTheme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const Item = styled(Paper)(({ theme }) => ({
  margin: 'auto',
  marginTop: '20px',

  [theme.breakpoints.up('md')]: {
    maxWidth: '70%',
    // height: '500px',
  },
  [theme.breakpoints.up('xs')]: {
    width: '80%',
    //height: '500px',
  },
}));
const FormInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    //backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    //width: '225px',
    padding: '10px 12px',
    [inputTheme.breakpoints.up('xs')]: {
      width: '255px',
    },
    [inputTheme.breakpoints.up('sm')]: {
      width: '400px',
    },
    [inputTheme.breakpoints.up('md')]: {
      width: '300px',
    },
    [inputTheme.breakpoints.up('lg')]: {
      width: '400px',
    },
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    }
  },
}));




function App() {
  const [userDetails, setuserDetails] = React.useState({ name: '', email: '', feedback: '' });
const onSubmit=()=>{
    alert("Event is scheduled!" + JSON.stringify(userDetails));
console.log("values---",userDetails)
  }
  return (
    <Item elevation={3}>
      <Grid container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start">
        <Grid item md={4} p={3}>
          <Grid item>
            <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 600 }}>Gaurav Garg</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>15 Minute Meeting</Typography>
          </Grid>
          <Grid item mt={2}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={2}>
                <AccessTimeFilledOutlinedIcon sx={{ fontSize: "20px", color: 'text.secondary' }} />
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>15 min</Typography>
              </Grid>
            </Grid>

          </Grid>
          <Grid item mt={2}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={2}>
                <CalendarTodayIcon sx={{ fontSize: "20px", color: 'text.secondary' }} />
             
              </Grid>
              <Grid item xs={9}>
                <Typography display="block" sx={{ color: 'text.secondary', fontWeight: 600 }}>9:30am - 9:45am,Friday,<br/>September 16 2022</Typography>
              </Grid>
            </Grid>

          </Grid>
          <Grid item mt={2}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={2}>
                <PublicIcon sx={{ fontSize: "20px", color: 'text.secondary' }} />
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600, overflow: 'wrap' }}>Indian Standard Time</Typography>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item md={7} p={3}>
          <form  onSubmit={onSubmit}>
            <Grid item >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Enter Details</Typography>
            </Grid>
            <Grid container direction="column">
              <Grid item mt={2}>
                <FormControl variant="standard">

                  <InputLabel shrink htmlFor="name" style={{ color: 'black', fontWeight: 600 }} required>
                    Name
                  </InputLabel>

                  <FormInput id="name" value={userDetails.name}
                    onChange={(e) => setuserDetails({ name: e.target.value, email: userDetails.email })} />
                </FormControl>
              </Grid>
              <Grid item mt={2}>
                <FormControl variant="standard">

                  <InputLabel shrink htmlFor="email" style={{ color: 'black', fontWeight: 600 }} required >
                    Email
                  </InputLabel>

                  <FormInput id="email" value={userDetails.email} onChange={(e) => setuserDetails({ name: userDetails.name, email: e.target.value })} />
                </FormControl>
              </Grid>
              <Grid item mt={2}>
                <Button variant="outlined" sx={{ borderRadius: '25px' }}>Add Guests</Button>
              </Grid>
              <Grid item mt={2}>
                <FormControl variant="standard">
                  <Grid style={{ color: 'black', fontWeight: 600 }} mb={1}> Please share anything that will help prepare for our meeting.</Grid>
                  <TextField
                    id="feedback" value={userDetails.feedback} onChange={(e) => setuserDetails({ name: userDetails.name, email: userDetails.email, feedback: e.target.value })}
                    placeholder=""
                    multiline
                  />
                </FormControl>
              </Grid>
              <Grid item mt={4}>
                {userDetails.name && userDetails.email?(
                   <Button variant="contained" sx={{ borderRadius: '25px' }} type="submit">Schedule Event</Button>
                ):(<Button variant="contained" sx={{ borderRadius: '25px' }} disabled>
                Schedule Event
              </Button>)}
             
              </Grid>
            </Grid>
          </form>

        </Grid>
      </Grid>
    </Item>


  )
}
export default App;