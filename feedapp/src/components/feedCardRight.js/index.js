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
  
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'none',
    borderTop:'0.1px solid #D8D8D8'
  },
  button:{
    color:'#909090',
     fontWeight:'520', 
    fontSize:'1rem',
    fontFamily: "Roboto sans-serif",
     textTransform:'capitalize',
     cursor:"pointer"
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
      color:'#909090',
      cursor:'pointer'
  } 
});

export  const FeedCardRight = () =>{
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <CardContent  style={{ width:'100%'}}>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
<InstagramIcon  className={classes.icon}/>
<LinkedInIcon className={classes.icon}/>
<TwitterIcon className={classes.icon}/>
<FacebookIcon className={classes.icon}/>
     </div>
     <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'1.5rem'}}>
         <div style={{display:'flex', flexDirection:'row'}}>
         <Typography className={classes.button}>CSR</Typography>
         <span  className="ml-2 mr-2 -mt-1" style={{color:'#8CA1A5'}}>
         |
         </span>
         <Typography className={classes.button}>Meet The Team</Typography>
         </div>
         <div style={{display:'flex', flexDirection:'row'}} className="mt-4">
         <Typography className={classes.button}>FAQ'S</Typography>
         <span  className="ml-2 mr-2 -mt-1" style={{color:'#8CA1A5'}}>
         |
         </span>
         <Typography className={classes.button}>Privacy Policy</Typography>
         </div>
         <div style={{display:'flex', flexDirection:'row'}} className="mt-4">
         <Typography className={classes.button}>Terms of Use</Typography>
         <span  className="ml-2 mr-2 -mt-1" style={{color:'#8CA1A5'}}>
         |
         </span>
         <Typography className={classes.button}>Support</Typography>
         </div>
     </div>
     <Typography variant="h6" style={{fontWeight:'530', textAlign:'center', color:'#404040', fontFamily: "Roboto sans-serif",
 fontSize:'1.2rem', marginTop:'1rem'}} >Powered by 
     <span style={{color:'black', fontWeight:'900', fontFamily: "Roboto sans-serif",
 fontSize:'1.8rem', marginLeft:5 }}>
     tribe
     </span>
     </Typography>
      </CardContent>
    
    </div>
  );
}