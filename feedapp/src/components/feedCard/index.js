import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShowMoreText from "react-show-more-text";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import profileImage from "../../assets/event.jpeg";
import { HeartButton } from "../heartButton";
import { Slideshow } from "../imageSlider";
import Box from "@material-ui/core/Box";
import logo from "../../assets/avatar.png";
import { timeago } from "../../utils/common";
import { useTheme, useMediaQuery, Button, Paper } from "@material-ui/core";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { CommentButton } from "../CommentButton";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background:'white'
    // padding:'1rem'
  },
  conatainer: {
    width: "100%",
    marginBottom: 30,
    paddingLeft: 0,
    paddingRight: 0,
  },
  media: {
    height: 0,
    padding: 15,
    margin: "0 1rem",
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
    width: 42,
    height: 42
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    color: "#333",
    fontWeight: 600,
    fontSize: 14,
    // lineHeight:14,
    paddingTop: 7,
    paddingLeft: -5,
    fontFamily: "Poppins sans-serif",
  },
  description: {
    color: "#333",
    fontWeight: 450,
    fontSize: "12px",
    lineHeight: "20px",
    position: "static",
    width: "100%",
    // height: '40px',
    fontStyle: "normal",
    fontFamily: "Poppins sans-serif",
    marginTop: "-1rem",
  },
  subheader: {
    fontFamily: "Poppins sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "10px",
  },
  emojiConatiner: {
    "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      minWidth: "unset !important",
      padding: "0px",
      display: "flex",
      flexDirection: "row",
    },
  },
  emoji: {
    width: 25,
    height: 25,
    borderRadius: 150,
    "&:hover": {
      width: 35,
      height: 35,
      backgroundColor: "red",
    },
  },
}));

export const FeedCard = ({ data, index }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isSelected, setisSelected] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    if (index === 0) {
      setExpanded(true);
    }
  }, [index]);
  const image = JSON.parse(data.object_urls)[0];
  let feedImage = "";
  let feedImages = [];
  if (image) {
    if (
      image.imageUrl?.indexOf("png") > 0 ||
      image.imageUrl?.indexOf("jpg") > 0 ||
      image.imageUrl?.indexOf("jpeg") > 0
    ) {
      feedImage = image.imageUrl;
      feedImages = JSON.parse(data.object_urls);
    } else {
      // feedImage = profileImage;
      feedImages = [];
    }
  } else {
    feedImage = profileImage;
  }
  //BreakPoint
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container className={classes.conatainer}>
  
      
        <div className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={logo} alt="event" className={classes.image} />
              </Avatar>
            }
            classes={{
              title: classes.headerTitle,
              subheader: classes.subheader,
            }}
            title={data.compiagn_title}
            subheader={timeago(data.createAt)}
          />
          {feedImages.length > 1 ? (
            <Slideshow feedImages={feedImages} />
          ) : (
            feedImage && (
              <CardMedia
                className={classes.media}
                image={feedImage}
                title="Event"
              />
            )
          )}

          <CardContent>
            <Typography paragraph className={classes.description}>
              <ShowMoreText
                lines={isMatch ? 2 : 3}
                more={
                  <span style={{ color: "gray", textDecoration: "none" }}>
                    see more
                  </span>
                }
                less={
                  <span style={{ color: "gray", textDecoration: "none" }}>
                    see less
                  </span>
                }
                className="content-css"
                expanded={false}
                // width={700}
              >
                {data.description}
              </ShowMoreText>
            </Typography>
          </CardContent>

          <CardActions disableSpacing style={{ marginTop: "-2rem" }}>
            <Tooltip
              componentsProps={{
                tooltip: {
                  sx: {
                    background: "white",
                    width: "10rem",
                  },
                },
              }}
              title={
                <div className="flex flex-row justify-around cursor-pointer">
                  <FavoriteBorderIcon className="text-black" />
                  <ThumbUpOutlinedIcon className="text-black" />
                  <EmojiObjectsOutlinedIcon className="text-black" />
                </div>
              }
              placement="top-start"
            >
             <div style={{
            // display: 'flex',
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <IconButton
                aria-label="add to favorites"
                onClick={()=>setisSelected(!isSelected)
                }
            >
                <FavoriteIcon style={{color: isSelected ? 'red' : 'gray'}} />
                <Typography variant="caption" component="p" style={{marginLeft:5, fontSize:15}}>
                    1k
                </Typography>
            </IconButton>

        </div>
            </Tooltip>

            <CommentButton />
          </CardActions>
        </div>
      {/* </Box> */}
    </Container>
  );
};
