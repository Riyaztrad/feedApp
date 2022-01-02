import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';
import { AppConainer } from '../../components';
import { Feed } from '../feed';
import OutlinedCard from '../../components/feedCardLeft';
import { FeedCardRight } from '../../components/feedCardRight.js';
const MobileFeeds = () => {
    return (
        <Grid container style={{display:'flex', flexDirection:'column',background:'#F9F9F9' }}>
        <Grid item md={8} >
           <OutlinedCard/>
        </Grid>
        <Grid item style={{width:'100%'}}>
            <Feed />
        </Grid>
        <Grid item >
            <FeedCardRight />
        </Grid>
    </Grid>
    )
}

export default MobileFeeds
