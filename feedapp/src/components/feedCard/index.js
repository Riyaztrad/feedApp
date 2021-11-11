import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShowMoreText from "react-show-more-text";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import profileImage from "../../assets/event.jpeg";
import {HeartButton} from '../heartButton';
import {Slideshow} from '../imageSlider';
import Box from '@material-ui/core/Box';
import logo from '../../assets/avatar.png';
import {timeago} from '../../utils/common'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    conatainer: {
        width:'100%',

        marginBottom: 30,
    },
    media: {
        height: 0,
        padding: 15,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    headerTitle:{
        color:'#333',
        fontWeight:550
    }
}));

export const FeedCard = ({data, index}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        if (index === 0) {
            setExpanded(true)
        }
    }, [index])
    const image = JSON.parse(data.object_urls)[0];
    let feedImage = ''
    let feedImages = [];
    if (image) {
        if (image.imageUrl?.indexOf("png") > 0 || image.imageUrl?.indexOf("jpg") > 0 || image.imageUrl?.indexOf("jpeg") > 0) {
            feedImage = image.imageUrl
            feedImages = JSON.parse(data.object_urls);
        } else {
            // feedImage = profileImage;
            feedImages = []
        }
    } else {
        feedImage = profileImage
    }
    return (
        <Container  className={classes.conatainer}>            <Box
                boxShadow={15}
                bgcolor="background.paper"
            >
                
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img src={logo}
                                    alt="event"
                                    className={classes.image}
                                />
                            </Avatar>
                        }
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon />
                        //     </IconButton>
                        // }
                        classes={{
                            title: classes.headerTitle
                        }}
                        title={data.compiagn_title}
                        subheader={timeago(data.createAt)}
                    />
                    {
                        feedImages.length > 1 ?
                            <Slideshow feedImages={feedImages} />

                            :
                            feedImage &&
                            <CardMedia
                                className={classes.media}
                                image={feedImage}
                                title="Event"
                            />
                    }
                 
             <CardContent>
            <Typography paragraph>
            <ShowMoreText
                lines={2}
                more={<span style={{color:'gray', textDecoration:'none',}}>Show more</span>}
                less={<span style={{color:'gray', textDecoration:'none',}}>Show less</span>}
                className="content-css"
                expanded={false}
                width={700}
                            > 
                            {data.description}
                            </ShowMoreText>

                        </Typography>
                        </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <HeartButton />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                        {/* <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            see more
                        </IconButton> */}
                    </CardActions>
                    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Collapse> */}
                </Card>
            </Box>
        </Container>);
}