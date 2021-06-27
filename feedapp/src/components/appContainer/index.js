import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import {useDispatch} from 'react-redux';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {showCreateDialog} from 'generic'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        paddingTop: 10,
        paddingBottom: 10,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        width: '20%',
        textalign: 'right',
        // backgroundColor:'#fff'
    },
    caption: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8px',
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        // flexGrow: 1,
        paddingTop: 50,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        color: '#fff'
    },
    addIcon: {
        height: 45,
        width: 45
    },
}));

export const AppConainer = ({children}) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    return (
        <div>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolbar}>

                    <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                        {"Campaigns Updates".toUpperCase()}
                        <Typography component="h1" variant="subtitle1" color="inherit" noWrap className={classes.caption}>
                            Donate Now - Help Today
                        </Typography>
                    </Typography>
                    <IconButton color="inherit"
                        onClick={() => {
                            dispatch(showCreateDialog({isVisible:true}))
                        }}>
                        <AddCircleIcon className={classes.addIcon} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div>
                    <div className={classes.appBarSpacer} />
                    {children}
                </div>
            </main>
        </div>
    );
}
