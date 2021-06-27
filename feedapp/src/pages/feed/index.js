import React, {useEffect, useState} from 'react';
import {fetchFeed} from 'generic'
import {useDispatch} from 'react-redux'
import {Container} from '@material-ui/core';
import {AppConainer, FeedCard, FeedForm} from '../../components';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme => ({
    title: {
        marginLeft: 20,
        marginBottom: 10
    }
})))
export const Feed = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [feeds, setFeeds] = useState([]);
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {

        const getFeeds = () => {
            return dispatch(fetchFeed());
        };
        const initData = () => {

            Promise.resolve()
                .then(() => getFeeds())
                .then((values) => {
                    console.log("result", values)
                    if (values.payload) {
                        setFeeds(values.payload)
                    }
                }).then(() => {
                    setIsReady(true);
                })
                .catch((err) => console.log(err));

        };
        initData();
    }, [dispatch]);


    return (
        <AppConainer>
            <Container maxWidth='md'>
                <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                    Feeds
                </Typography>
                {
                    isReady ?
                        feeds &&
                        feeds.map((item, index) => {
                            return (
                                <FeedCard key={index} index={index} data={item} />
                            )
                        })
                        :
                        <CircularProgress />
                }
            </Container>
            <FeedForm />
        </AppConainer>
    )
}