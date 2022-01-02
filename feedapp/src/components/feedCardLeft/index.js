import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    width:'100%',
    // position:'fixed',
    // margin:'0 2rem',    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'none',
    marginTop:'-1rem',
    outline:'none', 
    backgroundColor:'#fff',
    [theme.breakpoints.down('md')]: {
     display: 'none',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper:{
      width:'120%',
      padding:10,
      fontSize:17,
      fontWeight:500,
      cursor:'pointer',
      fontFamily: "Roboto sans-serif",


  }
}));

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <CardContent style={{width:'70%'}}>
      <Grid item xs>
          <Paper  className={classes.paper}>Your donations</Paper>
        </Grid>
      <Grid item xs style={{marginTop:'1rem'}}>
          <Typography  style={{fontSize:17, cursor:'pointer', fontFamily: "Roboto sans-serif",
}}>Groups</Typography>
        </Grid>
      <Grid item  xs style={{marginTop:'1rem'}}>
      <Typography style={{fontSize:17, cursor:'pointer', fontFamily: "Roboto sans-serif",
}}>All compaigns</Typography>
        </Grid>
      </CardContent>
    
    </div>
  );
}