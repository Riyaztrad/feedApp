import React, {useState} from "react";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Slideshow} from "../imageSlider";
import logo from "../../assets/avatar.png";
import {timeago} from "../../utils/common";
import {likeFeed} from "generic";
import {useDispatch} from "react-redux";
import {useCustomNotify} from "../useCustomNotify"
import "./index.css";
import {Reactions} from './animatedIcons/container'
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 5
  },
  conatainer: {
    marginBottom: 30,
    marginLeft: '20%'
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
  boxRoot: {

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 10
    },
  }
}));

export const FeedCard = ({data, index}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customNotify = useCustomNotify();
  const image = JSON.parse(data.object_urls);
  const [like, setLike] = React.useState(false);

  const [totalReations, setTotalReations] = React.useState(0);
  const [reaction, setReaction] = useState('Like')
  useEffect(() => {

    let c1 = data.like_reaction ? parseInt(data.like_reaction) !== 0 ? parseInt(data.like_reaction) : 0 : 0
    let c2 = data.support_reaction ? parseInt(data.support_reaction) !== 0 ? parseInt(data.support_reaction) : 0 : 0
    let c3 = data.love_reaction ? parseInt(data.love_reaction) !== 0 ? parseInt(data.love_reaction) : 0 : 0
    setTotalReations(c1 + c2 + c3)
  }, [data.love_reaction, data.like_reaction, data.support_reaction])

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

  const imogies = [
    {id: 'like', description: 'Like', img: 'http://i.imgur.com/LwCYmcM.gif'},
    {id: 'love', description: 'Love', img: 'http://i.imgur.com/k5jMsaH.gif'},
    // {id: 'haha', description: 'Haha', img: 'http://i.imgur.com/f93vCxM.gif'},
    {id: 'yay', description: 'Yay', img: 'http://i.imgur.com/a44ke8c.gif'},
    // {id: 'wow', description: 'Wow', img: 'http://i.imgur.com/9xTkN93.gif'},
    // {id: 'sad', description: 'Sad', img: 'http://i.imgur.com/tFOrN5d.gif'},
    // {id: 'angry', description: 'Angry', img: 'http://i.imgur.com/1MgcQg0.gif'}
  ];

  const onUpdate = (id) => {
    let reaction = imogies.filter(e => e.id === id)[0];
    setReaction(reaction)
    if (reaction.description === 'Like') {
      handlelikeFeed()
    } else if (reaction.description === 'Love') {
      handleLoveFeed()
    } else if (reaction.description === 'Yay') {
      handleSuppoprt()
    }

  }

  const handlelikeFeed = async () => {
    const reqdata = {

      like: parseInt(data.like_reaction) + 1,
      support: parseInt(data.support_reaction),
      love: parseInt(data.love_reaction),
      id: data.ID,
    };
    const result = await dispatch(likeFeed(reqdata));
    console.log("result", result)
    if (result.payload !== undefined) {
      let c1 = data.like_reaction ? parseInt(data.like_reaction) !== 0 ? parseInt(data.like_reaction) + 1 : 1 : 1
      let c2 = data.support_reaction ? parseInt(data.support_reaction) !== 0 ? parseInt(data.support_reaction) : 0 : 0
      let c3 = data.love_reaction ? parseInt(data.love_reaction) !== 0 ? parseInt(data.love_reaction) : 0 : 0
      setTotalReations(c1 + c2 + c3)

    } else {
      customNotify("Something went wrong!", 'error')
    }

    setLike(true);
  };


  const handleLoveFeed = async (event) => {
    const reqdata = {
      like: parseInt(data.like_reaction),
      support: parseInt(data.support_reaction),
      love: parseInt(data.love_reaction) + 1,
      id: data.ID,
    };
    const result = await dispatch(likeFeed(reqdata));
    console.log("result", result)
    if (result.payload !== undefined) {
      let c1 = data.like_reaction ? parseInt(data.like_reaction) !== 0 ? parseInt(data.like_reaction) : 0 : 0
      let c2 = data.support_reaction ? parseInt(data.support_reaction) !== 0 ? parseInt(data.support_reaction) : 0 : 0
      let c3 = data.love_reaction ? parseInt(data.love_reaction) !== 0 ? parseInt(data.love_reaction) + 1 : 1 : 1
      setTotalReations(c1 + c2 + c3)


    } else {
      customNotify("Something went wrong!", 'error')

    }

  };


  const handleSuppoprt = async (event) => {
    const reqdata = {
      like: parseInt(data.like_reaction),
      support: parseInt(data.support_reaction) + 1,
      love: parseInt(data.love_reaction),
      id: data.ID,
    };
    const result = await dispatch(likeFeed(reqdata));
    console.log("handleSuppoprt", result)
    if (result.payload !== undefined) {
      let c1 = data.like_reaction ? parseInt(data.like_reaction) !== 0 ? parseInt(data.like_reaction) : 0 : 0
      let c2 = data.support_reaction ? parseInt(data.support_reaction) !== 0 ? parseInt(data.support_reaction) + 1 : 1 : 1
      let c3 = data.love_reaction ? parseInt(data.love_reaction) !== 0 ? parseInt(data.love_reaction) : 0 : 0
      setTotalReations(c1 + c2 + c3)

    } else {
      customNotify("Something went wrong!", 'error')

    }
  };

  let executeOnClick = () => {
  };
  return (


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
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <div style={{marginLeft: 10, marginTop: 10}}>
          {
            imogies.slice(0, 3).map((item, i) => {
              return (
                <img style={{height: 20, width: 20, marginRight: 5}} src={item.img} alt={'imgogi'} />

              )
            })
          }
        </div>
        <span style={{marginTop: 6, marginLeft: 10}}>{totalReations !== 0 ? totalReations : ''}</span>
      </div>
      <CardActions disableSpacing>


        <Reactions onUpdate={onUpdate.bind(this)} items={imogies}>
          <IconButton
            onClick={handlelikeFeed}
            aria-label="like"
            style={{color: like ? "#1485BD" : "gray"}}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>

              <img style={{height: 30, width: 30}} src={reaction.img ? reaction.img : 'http://i.imgur.com/LwCYmcM.gif'} alt={'imgogi'} />
              <span style={{fontSize: 13, marginTop: 3, display: 'flex', justifyContent: 'center'}}>{reaction.description ? reaction.description : 'Like'}</span>

            </div>
          </IconButton>


        </Reactions>
        {/* <IconButton
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
            </IconButton> */}
        < IconButton aria-label="share" >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <ShareIcon style={{fontSize: 32}} />
            <span style={{fontSize: 13, marginTop: 3, display: 'flex', justifyContent: 'center'}} className="text-muted small">Share</span>
          </div>
        </IconButton>
      </CardActions>
    </Card>


  );
};
