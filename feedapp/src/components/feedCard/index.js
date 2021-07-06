import React from "react";
import ShowMoreText from "react-show-more-text";
import {makeStyles} from "@material-ui/core/styles";
import React, { useEffect } from "react";
// import CommentIcon from "@material-ui/icons/Comment";
import ShowMoreText from "react-show-more-text";
// import { Link } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import {Slideshow} from "../imageSlider";
import Box from "@material-ui/core/Box";
import logo from "../../assets/avatar.png";
import {timeago} from "../../utils/common";
import {likeFeed} from 'generic';
import {useDispatch} from 'react-redux'
// import profileImage from "../../assets/event.jpeg";
// import { HeartButton } from "../heartButton";
import { Slideshow } from "../imageSlider";
import Box from "@material-ui/core/Box";
import logo from "../../assets/avatar.png";
import { timeago } from "../../utils/common";
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

export const FeedCard = ({ data, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const image = JSON.parse(data.object_urls);
  const [like, setLike] = React.useState(false)
  console.log("image", data)
  const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  useEffect(() => {
    if (index === 0) {
      setExpanded(true);
    }
  }, [index]);
  // console.log("data",data)
  const image = JSON.parse(data.object_urls);
  console.log("image", image);
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
      like: 1,
      feedId: data.ID
    }
    const result = dispatch(likeFeed(reqdata))
    console.log("result", result)
    setLike(true)
  }

  let executeOnClick = (isExpanded) => {
    console.log(isExpanded);
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
              onClick={handlelikeFeed} aria-label="like"
              style={{color:like?'blue':'gray'}}
              >
              <ThumbUpIcon /> <span className="text-muted small">Like</span>
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
