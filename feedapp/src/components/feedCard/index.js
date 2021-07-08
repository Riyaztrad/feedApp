import React from "react";
import ShowMoreText from "react-show-more-text";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import {Slideshow} from "../imageSlider";
import Box from "@material-ui/core/Box";
import logo from "../../assets/avatar.png";
import {timeago} from "../../utils/common";
import {likeFeed} from "generic";
import {useDispatch} from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useCustomNotify} from "../useCustomNotify"
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  conatainer: {
    marginBottom: 30,
  },
  media: {
    height: 0,
    padding: 15,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

export const FeedCard = ({data, index}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customNotify = useCustomNotify();
  const image = JSON.parse(data.object_urls);
  const [like, setLike] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);
  const [love, setLove] = React.useState(false);
  const [loveCount, setLoveCount] = React.useState(0);


  useEffect(() => {
    setLikeCount(parseInt(data.like_reaction))
    setLoveCount(parseInt(data.love_reaction))
  }, [data.love_reaction, data.like_reaction])

  let feedImage = "";
  let feedImages = [
    {
      url: "https://www.youtube.com/watch?v=d95PPykB2vE",
      type: "mp4",
    },
    {
      url: "https://aktu.ac.in/pdf/syllabus/Syllabus1819/all/Mechanical%20Engineering.pdf",
      type: "pdf",
    },
    {
      url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752",
      type: "jpeg",
    },
  ];

  const handlelikeFeed = async (event) => {
    event.preventDefault();
    const reqdata = {
      like: parseInt(data.like_reaction) + 1,
      feedId: data.ID,
    };
    const result = await dispatch(likeFeed(reqdata));
    console.log("result", result)
    if (result.payload !== undefined) {

      setLikeCount(parseInt(data.love_reaction) + 1)

    } else {
      customNotify("Something went wrong!", 'error')
    }

    setLike(true);
  };


  const handleLoveFeed = async (event) => {
    event.preventDefault();
    const reqdata = {
      love: parseInt(data.love_reaction) + 1,
      feedId: data.ID,
    };
    const result = await dispatch(likeFeed(reqdata));
    console.log("result", result)
    if (result.payload !== undefined) {
      setLoveCount(parseInt(data.love_reaction) + 1)

    } else {
      customNotify("Something went wrong!", 'error')

    }
    setLove(true);
  };

  let executeOnClick = () => {
  };
  return (
    <Container className={classes.conatainer}>
      <Box
      // boxShadow={15}
      // bgcolor="background.paper"
      >
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={logo} alt="event" className={classes.image} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={data.compiagn_title}
            subheader={timeago(data.createAt)}
          />
          <CardContent>
            <Typography paragraph>
              {/* {data.description} */}
              <ShowMoreText
                lines={2}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                onClick={executeOnClick}
                expanded={false}
                width={800}
              >
                {data.description}
              </ShowMoreText>
            </Typography>
          </CardContent>

          {feedImages.length > 1 ? (
            <Slideshow feedImages={image} />
          ) : (
            feedImage && <CardMedia className={classes.media} image={feedImage} title="Event" />
          )}

          <CardActions disableSpacing>
            <IconButton
              onClick={handlelikeFeed}
              aria-label="like"
              style={{color: like ? "#1485BD" : "gray"}}
            >
              <ThumbUpOutlinedIcon /> <span className="text-muted small">{likeCount > 0 ? likeCount : 'Like'}</span>
            </IconButton>
            <IconButton
              onClick={handleLoveFeed}
              aria-label="love"
              style={{color: love ? "red" : "gray"}}
            >
              <FavoriteIcon /> <span className="text-muted small">{loveCount > 0 ? loveCount : 'Love'}</span>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon /> <span className="text-muted small">Share</span>
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};
