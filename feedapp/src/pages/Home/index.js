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
import MobileFeeds from './MobileFeeds';



// var ScrollArea = require('react-scrollbar');

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Home = () => {
    //BreakPoint 
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
             <AppConainer />
                <Container style={{background:'#F9F9F9'}}>
                    {isMatch ? <MobileFeeds/>
                    :
                    <Grid container>
                        <Grid item xs={3}>
                           <OutlinedCard/>
                        </Grid>
                        <Grid item xs={6}>
                            <Feed />
                        </Grid>
                        <Grid item xs={3}>
                            <FeedCardRight />
                        </Grid>
                    </Grid>

}
                </Container>
         </div>
    )
}
