import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import {createTheme} from '@mui/icons-material/Style'
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';
import logo from '../../assets/logoold.png'
import DrawerComponent from './DrawerComponent';



const useStyles = makeStyles((theme) => ({

    button: {
        justifyContent: 'left',
        display: 'flex',
        fontFamily: 'Raleway',


    },
    font: {
        fontFamily: 'arial'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        // flexGrow: 1,
        // paddingTop: 50,
        // height: '100vh',
        // overflow: 'auto',
    },


}));



export const AppConainer = ({children}) => {
    const classes = useStyles();

    //BreakPoint 
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <ThemeProvider>
            <Box sx={{ flexGrow: 1 }} >

                <AppBar position="static" style={{ backgroundColor: 'white' }}>
                    <Toolbar style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Grid container spacing={1} >
                    <Grid item xs={1} >                    <img src={logo} style={{height: 80, width: 200, marginLeft:'-1rem'}} alt="logo 1" />
                    </Grid>
                        {
                            isMatch ?
                                <DrawerComponent /> :
                                <><Grid item xs={7} >
                                    <ul style={{display:'flex', justifyContent:'space-around',  width:'90%', flexDirection:'row', marginTop:'2rem', marginLeft:'2rem', alignItems:'center'}}>
                                        <li herf='/home' style={{ display: 'inline',color:'black', cursor: 'pointer', fontFamily: 'Exo 2, sans-serif' }}> Home </li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer' }}>Explore </li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer' }}>Recurring </li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer', }}>How It Works</li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer' }}>News</li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer' }}>Blog</li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer' }}>About</li>
                                        <li style={{ display: 'inline', color:'black', cursor: 'pointer' }}>Contact</li>
                                    </ul>
                                </Grid><Grid item xs={4} style={{backgroundColor: 'rgb(36, 184, 119)', height:"6rem",}}>
                                    <div  style={{display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'2rem', flexDirection:'row'}}>
                                        <Button style={{ border: 'none', backgroundColor: 'transparent' }}
                                            variant="contained"
                                            color="secondary">Login</Button>
                                        <Button style={{ border: 'none', backgroundColor: 'transparent' }}
                                            variant="contained"
                                            color="secondary">Signup</Button>
                                        <Button style={{ border: 'none', backgroundColor: '#333', width:'13rem' }}
                                            variant="contained"
                                            color="secondary">Create Compaign</Button>
                                            </div>
                                    </Grid></>
                        }
                        </Grid>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                <div>
                    <div className={classes.appBarSpacer} />
                    {children}
                </div>
            </main>
            </Box>
        </ThemeProvider>

    )
}
