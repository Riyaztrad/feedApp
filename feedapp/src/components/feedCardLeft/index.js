import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width:'100%',
    // position:'fixed',
    // margin:'0 2rem',    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'none',
    outline:'none'
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
      fontWeight:500

  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent style={{width:'100%'}}>
      <Grid item xs>
          <Paper className={classes.paper}>Your donations</Paper>
        </Grid>
      <Grid item xs style={{marginTop:'1rem'}}>
          <Typography style={{fontSize:17}}> Groups</Typography>
        </Grid>
      <Grid item xs style={{marginTop:'1rem'}}>
      <Typography style={{fontSize:17}}> All compaigns</Typography>
        </Grid>
      </CardContent>
    
    </Card>
  );
}