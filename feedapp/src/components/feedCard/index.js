import React, {useEffect} from "react";
// import CommentIcon from "@material-ui/icons/Comment";
import ShowMoreText from "react-show-more-text";
// import { Link } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import {makeStyles} from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import profileImage from "../../assets/event.jpeg";
// import { HeartButton } from "../heartButton";
import {Slideshow} from "../imageSlider";
import Box from "@material-ui/core/Box";
import logo from "../../assets/avatar.png";
import {timeago} from "../../utils/common";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: "20px",
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
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    if (index === 0) {
      setExpanded(true);
    }
  }, [index]);
  // console.log("data",data)
  const image = JSON.parse(data.object_urls);
  console.log("image",image)
  let feedImage = "";
  let feedImages = [{
    url: 'https://www.youtube.com/watch?v=d95PPykB2vE',
    type: 'mp4'
  },
  {
    url: 'https://aktu.ac.in/pdf/syllabus/Syllabus1819/all/Mechanical%20Engineering.pdf',
    type: 'pdf'
  },
  {
    url: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
    type: 'jpeg'
  },
  ];

  // if (image) {
  //   if (
  //     image.imageUrl.indexOf("png") > 0 ||
  //     image.imageUrl.indexOf("jpg") > 0 ||
  //     image.imageUrl.indexOf("jpeg")
  //   ) {
  //     feedImage = image.imageUrl;
  //     feedImages.push({url:JSON.parse(data.object_urls),type:'jpeg'})
  //   } else {
  //     // feedImage = profileImage;
  //     feedImages = [];
  //   }
  // } else {
  //   feedImage = profileImage;
  // }

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

          {/* */}
          {/* <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.compiagn_title}
                        </Typography>
                    </CardContent> */}
          <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
              <HeartButton />
            </IconButton> */}
            <IconButton aria-label="like">
              <ThumbUpIcon /> <span className="text-muted small">Like</span>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon /> <span className="text-muted small">Share</span>
            </IconButton>
            <IconButton aria-label="send">
              <SendIcon /> <span className="text-muted small">Send</span>
            </IconButton>

            {/* <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
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
    </Container>
  );
};
