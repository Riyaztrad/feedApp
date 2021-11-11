import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {createTheme} from '@mui/icons-material/Style'
import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import DrawerComponent from './DrawerComponent';



const useStyles = makeStyles((theme) => ({

    button: {
        justifyContent: 'left',
        display: 'flex',
        fontFamily: 'Raleway'

    },
    font: {
        fontFamily: 'arial'
    }


}));



export const Header = () => {
    const classes = useStyles();
    let history = useHistory()

    //BreakPoint 
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <ThemeProvider>
            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="static" style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Toolbar>
                        <Typography  variant="h3" component="div" style={{ flex: 1, color: '#0fdb16', marginLeft: 50, fontFamily: 'Balsamiq Sans, cursive'} }>
                            NextDoor
                        </Typography>
                        {
                            isMatch ?
                                <DrawerComponent /> :
                                <>
                                    <ul>
                                        <li  herf='/home' style={{ display: 'inline', paddingLeft: 20, paddingRight: 20,fontFamily: 'Exo 2, sans-serif'  }}> NEIGHBORS </li>
                                        <li style={{ display: 'inline', paddingLeft: 20, paddingRight: 20, cursor: 'pointer' }}>AGENCIES </li>
                                        <li style={{ display: 'inline', paddingLeft: 20, paddingRight: 20, cursor: 'pointer' }}>BUSINESS</li>
                                        <li style={{ display: 'inline', paddingLeft: 20, paddingRight: 20, cursor: 'pointer' }}>NONPROFITE</li>
                                    </ul>
                                    <Button className={classes.button}
                                        onClick={() =>
                                            history.push('./Nextdoorlogin')
                                        }
                                        variant="contained"
                                        color="secondary">Login</Button>
                                </>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>

    )
}
