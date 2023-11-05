import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function Signin() {
    const paperStyle = { padding: 20, maxWidth:"100%" ,  };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnstyle = { margin: '8px 0' };
    const contuner ={    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/image.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
    
    
}
    return (
        
            
            <Grid  style={contuner}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <Grid>
                        <TextField label='Username' placeholder='Enter username' fullWidth required />
                        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                        <FormControlLabel
                            control={<Checkbox
                                name="checkedB"
                                color="primary" />}
                            label="Remember me" />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                        <Typography>
                            <Link href="#">
                                Forgot password ?
                            </Link>
                        </Typography>
                        <Typography> Do you have an account ?
                            <Link href="#">
                                Sign Up
                            </Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
      
    );
}
