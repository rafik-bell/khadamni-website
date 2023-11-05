import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


export default function Register() {
    const paperStyle = { padding: 20, maxWidth:"50%"   };
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
 const textfild ={margin: '8px 0'}
    return (
        
            
            <Grid  style={contuner}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Register</h2>
                    </Grid>
                    <Grid>
                        <TextField style={textfild} label='Nom' placeholder='Enter nom' fullWidth required />
                        <TextField style={textfild} label='Prénom' placeholder='Enter Prénom' fullWidth required />
                        <TextField style={textfild} label='Email' placeholder='Enter Email' fullWidth required />
                        <TextField style={textfild} label='Username' placeholder='Enter username' fullWidth required />
                        <TextField style={textfild} label='Mot de passe' placeholder='Enter username' fullWidth required />
                        <TextField style={textfild} label='conf Mot de passe' placeholder='Enter Mot de passe' fullWidth required />
                        <TextField style={textfild} label='Telephone' placeholder='Enter telephone' fullWidth required />
                        <TextField style={textfild} label='Username' placeholder='Enter username' fullWidth required />
                        
                        
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                       
                        <Typography> Do you have an account ?
                            <Link href="/Signin.tsx">
                                Sign In
                            </Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
      
    );
}
