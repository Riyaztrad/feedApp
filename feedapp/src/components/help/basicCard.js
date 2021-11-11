import * as React from 'react';
// import Box from '@material-ui/material/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export  function BasicCard() {

  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 26,fontWeight:'bold',color:'#000000',fontFamily:'cursive'}}  gutterBottom>
        Applecroft
        </Typography>
        <Typography variant="h6" >
          264 neighbours
        </Typography>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>
        {/* <img src={chip} alt="Chip" /> */}

            </div>
            <div style={{alignItems:'center',textAlign:'center',marginTop:20}}>
            {/* <progress value={23} max={100} color={'#ff7979'} /> */}
            <p >
          <span style={{color:'#00a3b1',fontSize:15,fontWeight:'bold',fontFamily:'serif'}}>{(23/100) * 100}%</span> of 3,532 housholds
        </p>

            </div>
      </CardContent>
      <CardActions>
      <Button variant="contained"
        style={{backgroundColor:'#00a3b1',marginBottom:10,borderRadius:10}}
        fullWidth
        >Text</Button>
      </CardActions>
    </Card>
  );
}
