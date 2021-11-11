import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    // width:'20%',
    // position:'fixed',
    // margin:'0 2rem',    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'none',
    outline:'none'
  },
  button:{
    color:'gray',
     fontWeight:'520', 
    fontSize:'1rem',
     textTransform:'capitalize'
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

  },
  icon:{
      color:'gray'
  }
});

export  const FeedCardRight = () =>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent  style={{ width:'100%'}}>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
<InstagramIcon className={classes.icon}/>
<LinkedInIcon className={classes.icon}/>
<FacebookIcon className={classes.icon}/>
<TwitterIcon className={classes.icon}/>
     </div>
     <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'1.5rem'}}>
         <div style={{display:'flex', flexDirection:'row'}}>
         <Button className={classes.button}>CSR</Button>
         <span style={{marginTop:'.4rem'}}>
         |
         </span>
         <Button className={classes.button}>Meet The Team</Button>
         </div>
         <div style={{display:'flex', flexDirection:'row'}}>
         <Button className={classes.button}>FAQ'S</Button>
         <span style={{marginTop:'.4rem'}}>
         |
         </span>
         <Button className={classes.button}>Privacy Policy</Button>
         </div>
         <div style={{display:'flex', flexDirection:'row'}}>
         <Button className={classes.button}>Terms of Use</Button>
         <span style={{marginTop:'.4rem'}}>
         |
         </span>
         <Button className={classes.button}>Support</Button>
         </div>
     </div>
     <Typography variant="h6" style={{fontWeight:'500', textAlign:'center', color:'gray', fontSize:'1.4rem'}} >Powered by 
     <span style={{color:'black', fontWeight:'800', fontSize:'1.5rem', marginLeft:5 }}>
     tribe
     </span>
     </Typography>
      </CardContent>
    
    </Card>
  );
}