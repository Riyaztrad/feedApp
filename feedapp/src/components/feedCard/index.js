import React, {useState} from "react";
import ShowMoreText from "react-show-more-text";
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
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
    {id: 'like', description: 'Like', img: 'https://www.userflow.nl/images/Linkedin-Like-Icon-Thumbup500.png'},
    {id: 'love', description: 'Love', img: 'data:image/png;base64,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'},
    // {id: 'haha', description: 'Haha', img: 'http://i.imgur.com/f93vCxM.gif'},
    {id: 'yay', description: 'Support', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///9trk0kUihHmURxs08bSSRxtE8gSyUhTyciUSYeTCVJnUZKn0YiTycfSSQhTSYAQgAeTyIXSxwARQsRSRdpqUsmVSkXRSMuXi1MgjtqqktkokhblkMLRxJQiD5FlEI2ZzAAPgArWis/cjVHfDnw8/FBjD8tZC9cl0Q8gjvX3ti0wbXR2dJqhWyCmIQ1czU5eziWqJjo7Oh1jXfBzMIybTNJbExffGGot6k3XjpmgWiSpZQ8Yz9PcFHf5N/Fz8b2WRq8AAAXGUlEQVR4nN1da1uqShTeEijXFDC0jCwNu2hWWmn3//+vDppzWzMLUdHyvF/282wMZjHvrPsM//4VjemL9vGYFH7bP4PkJbQ0K34d/fZAtoZhrM0QTH57IBtgOnl5e8IuJpY1l9AKv3Y5piKRfIS+H9TGyOXpzxRqWtzf6bAKxKQ+F6A2VV/+9BcShug0/3Hchj8C+B+ZlzXL31dVQ1lYV66zYbC4HNztemRFYck6q1uEpN+7HllRoDQMhoqrfXLVf935yIpCEi1myf9UXKV6pv6+85EVhgkRIpAdsxGhsBXvrTX89++9jq+0R3JNOcH7giey1OqP0rUPagz31tynGPlkIUqe5zclaf03RlYYyERZPrwypsZQpWf3B1SOGtAmxOlOrwx+Z2gFAbX59IL/8jsjKwq3RJAAxBcvRM/EiFe+NwgWZLRE5/u2tvdONwFzXASbPyTGcH+dbgJq82PB5sdEz8T7GhlSqG3+0//A6SZIyIITbP5kmdOdJPuTYXz15dn6IlZSqyn1zNedH0bDfZGR2HxeQuZ0K43h1A9mWdSPPRGRxLnBG/u/lyynO3kLf9RQHUvR/TV8zCfRqt3S//mmGShF2DgICYX3xlR+vYaBX+e9tiyne1gjdiS1JPsSGSfTt8k7N9jEpxko6HR/vcQagzpDtwdgGSioZ6Z1nxNwf31y6rEBpzuZhBYnoFXbW3eHOHJAkzz5ASefFtT3N7nxXZPth6hiZkv0c08UqRKfdWg//t1+1Hn5/JqcudonJC+1IIgvuGX2HfMqRqtHt/hf7weehuMpZ+yTQFAx4b44M/lB7cd8eUb7q2JQvNe5CZzss4rBQGONvVcxGAYL+2HVP/ZexSAYz/M2Vrjf6e8sJONavR5Ge+um5cHt43t/T2J6gtHgqf80+D/qxTluh8FFGMZheBGM97YLIQODSY22WVhBLfrf9R4OQ8HJ1Kw4KtDIjQb9af/p9jfpP4k1CCsuyM4l00kUpwhj62X4S6Yz+QgkAQvzVd7r8SLHY1l+EL78Sm31UyngzJq/iavxq/8+vhu/9/PPxLcfC0Gy5l/8gocwlClKUH9lr3z0/lGL60EQ1OPa6zDfVDyC5T1DuPPaHElQKOHXSebp3a+z2Ujp9pnDmRmHqnvGuw4lXzkaeYeHhx5g6vyVjz4A2zQ//FyWGn1XCpjOIiySD6bD4fCxv6UlOmUc9bz7Xrt336kIQs7SE4OazLZ0SWVroj5GDivm7cb3XS2Mf8h/MSkikE7SF3b3Nn6f3v5oEdrmpFWvHPfgwHHd3lVFkKT+WLfkcc4mY5LhF4wi9R9pQgvE4KXG6Tk/fN1Uxq/hazjTFukbC1/HKS0GlH3eVSrfHI5744nTiA71FffvxtxfeZUUVTaJtAQ5hOTw0QbzXEiGdW42rNQ6fbNQXSMCzmQ86FS1PPBDjKlfnIY+vLpp927u2WtblHdGLwpyxBtsc7iN4GT4LCN42HMOOLj3h7lERJnK8jie13adGTOcDhHRCuYCRkpDXF/bnPQv0IWRIhIETEXseab0I8/QIs2whf8LLCVT2SqMDuit6fqeF+4ihfqaAdsmsFTALLunec9sFTrOzz9NyFTjvFUqnbQuI4P/XyVTaXuRVm1TAd1nMomzlpwxtryt+lo++gDRh1TCn3G4zs1zJyWWFzXve/fiLBpnZb2Uolw6s4UrCqZSI8ReXYo2ob4VJU+ItdTkdrNcSF4RShB03PnE3XvVhULwvGoUAQFLC+ilpjCNQQSZSnctVHs89TvkL+LvF25AdsMwGtwdL9aITlFKEBymI3FvKrgKNc+pgLN5vBREtC5Ak80bVSL8+nZuyEq0uEVoa2dHeql12qHEWKNP/vaCjcarRB1NEsVrus5zlv5snJR4lK81wFRh8dDeOFGDtSvyjY2uPie/Xm6SO67RdjVhb6zy3HYcp/0QgYdVHp4Vj6cwm2VBwpJ+cp7B1IlaQrcp3dju0hsfNch/xqv6qCNmfis9d6Exb6qiIlFYB34gl0DCdBqPG/wvrJjj1ljJ0gPnHnLH7OjshudU164aRU7pKjy8oU90nGbWpMGRdCUJU6aKLyl+oRqCahpPlLAnWaBTJmGpRVjhr9pcRTkj6O4D92EVEWUJU50KmBoQplKXxhMdCacD7yvcjypvqallCaipqIqei9uzPPjEmTC2LetU4WWzMR2LOjV8B6yptkUJ78UHistbPyavXLHZIws0kGHxA3ngwZU8jUbz8rjbAc5ZqjNUEqZMNUWmfs751ScrX7CHsjb1BBvE0XQ1//uLTGHlAXifMxdbUBfpW/VaZV0v661uQ3zd9rmCpwrr73/zElZ6gDadjDkslQhNVe1zuebwXpJw5mLzkjDdVgbmIDVcShElnVp75zr9qjfiI5nR/xlRU2BGuUsIsdom3ITmYiJXkhAw1eQMe/nMEBiY2ma1iNeaQOn4czQinrf3AB7piszoCLfUz8iNVrQX1AcEUSB56AN9qnHGP7HcioSh250jpYySTrX6THuDJzqiAo/EOx0xt24lCYcs1FRMYioifShQJ3Donn2aj6n0gd4VfKeOMIkeeFdNcrW2UgWArgpZm/6ASCjb9fKZqInQxdiy1T5RR5JQmETzSLzNJbFTK9oLFnFX7lUiEpdb5ZsBplaifEylkB7m8EFZpSXehtmL1bxvLitaeZZFdIiEpsIiwKGbOFNVIlZ60tN63CQa1+BphAlWvFqhigvHqp0DSBym30zl0CWmIjq1ZcpMheZi9rgrthTtM/FezF7UV9OmT3yAWO1BDd6hDzxWzY8OFpkdneRmqqfgzAELRO1jcKdr8jZXDRKFCtMheCoX1Bgtpfupg6E3MKaeSSJ2FKvihopYhZqrTN/lqidvCFVCyFSaItLMSDlyaehGF/ldSwNeuycJyGfdzHPwRsuX1Oi/LZeKx0jIRXnejRBHNdlKjEqIiy0OvdJsIX4qmO4q9Grms0j1qfRGqTbVVs0qJmKpRDAbvHozzXxD9wyEqTqYbpX2ZsrGPoJ/TtM1KyakkiHIoQtM5dUbnzcUp/F4PZ3qRZL2dh4IIYxrcBP2gix/lQBjIBUtZl4qe7ltnoLGua5mKhi63VHqpXSUYLorNzAwpaSRlGmpRJ+xyobjfqzKCB8+O+Tlcupt9lgNYSqIqMwMpgrvImWqOI30jSocxS65toL73a+pc/rVTpu8XPde8PkxpuoSU5HfAZ2aPknMSTFVI80h0zW5T6e4DbGiBccf91kYkgHVOHnDLQMwNZ+f6lVF7U0XvnEiPYJmVZGznCRkFi0oUx2QYKhW1YsMpi3MDOtvik/iRHRpSqpxDf9Qv2ap4XyTOMwsWiz4A7IZ82djOvUSODioThXDkmpE10S67gljKrKqKVMK55vEW85hmxUtIlC0mPNHWfRNHZdcCbYKolP1UhdlKlM1cjyjn9I/y6VOWYY9JUrbceWiRarpnpVVJzvKyVQ0ogJhCbP+Lp0nRa5Z75CLVrTcJiasFEkMoNRt4UkMJcjLVFynikz1tIX1Z6qmAb0aYRJzODY0dalxdtdxFKlgJYzzfEzFdGpJ7wIn7mcUTNWosunMdbPgITIZJF2zaJEyFbH+uZkKdepce/doYkFOnfCTuPxMqg/aEyQ6Tm5PU1LThCklE7X+OZmq0KkOlzrRYGly/jdNFicusxh0RUtFC1dRXjMiRdECtf6n+aw/9FPnTHXZK1T9SYuqqKXKhvzQk7NsElPN1B8t6+XyyaVYfbLRiEp8SaifmupUkalXDouCjZbqL2jCZulxMVRCRarU7UVC0SIiMUX5BOgHNKKSmIpZ/w5kKvX1FeHFDOzGS/IZ2UULQafafNHi1AZFC0SnnkoRlfpdAOuvVe9ZJkOZ/mKB9BKe0gKwIq93kFG00I9A0QLTqUfi7OS2/ow9HeXvddZ+kn1qMdd+qJKQcy5gyqScl6nwd3hEBcuui5enWoh8FCX3FfNgLWZI0YKSRVG0AEzFrL/EVHU+VbL+9NWpb3vJXkhmYf+FawNWiUhzQrLl1YF+QJnaauZlqqqAYyPqiXUuaP5rxlLkNiVXm47EVIcOS2X19K6weHDr3wWx/yUyaGD9f9DBfsxuWs9ailyTnKe14TRyTr4Ubc+ecibW8w11OT9lqmjxjKZ61NK7mE+i7Hz/3JSzRXFGHWMgZPRhgta5yqDp7ClAp5omElFJOhVJxCmYqm5lKQnOm3aRoW3eeRErVyJTWeoSKVpI+iE3UzHd2+oAX8pGtG+pdMQktLIOpJzweQxPE2tPXKrUVutAqWUB06lSawMybkmnRpiEXJCRrW3E7WliKYHLd5sakjiDLQuoToW6F3HFpXeBLERxKWZFw8mLkI0SmCoULWzE54LRAc5U8DssKy6ubsQizkW8ou8iuwP8Tdi5NNsioJpETWsoa6TrM1VT/Uh6F2rXdPFD1qubXRd+F/PeFY6pDr/w0aFDpmKZf5Gp+OzwOlXV3EnBtM2SWg0484hjqtPjU4mmdp2vMogxVYgibMT0i++igZmL+e+u86b5R58YU2HRAmVqzvIa97sMCZl98VBd+nM/Gg0v7Vl8F3ddMOvvik3eRhNjqti/bmO6l+kRqT4o3vDUtk3TwDx1AhZlXCyRkA+lZmBMdcVGfQ9zXFZlqo2keNi7OO52cUVKXgR1bZZ9k+FRA0UoZv3dBzGtn5+pyKDODMO0U7W1DLNm1qW/ofH+kp7FO0WVjepUt1cFLjbG1Hyp4NnsXGYpkJVAu2wyT/X7VNagKFPhrkPM+kttYFh5Lcfk5AWtRllWhtGfIEU2z6NMBQWohjoJJnWwNbL0ZTES0nA/Y7MJtrVa43SqeyNs5sooWgCd2kT8z8JAHXC83DbADxbgmOrC3QJYKhi2LJgIU4tCa7mqmXAOjedVQcniJ/Z3DiKpjIjpVKllQRk+FwbalYkWarijE7zq1f3DcwS2PTUeXLen2ryG61SQiEO8hIIkJBbRwoJEtiHQax64ruM6YNu9dnjVU9fb8jNV7c8WIyFVNcgxt2z3mtdceDGO2xM56aHbK3GmGrl+V4SE1OYjRQyWUeSqiE7uPem4Ts0XNBYAGl8gLe7vdF+usDEI+jEo8IbFJkzEbWkaT2jbqXofNNufB1KJytMTTNuWtq+hsT9srsFc8Q1B2zMQZUqTwlJPMggNZzDOT1utU7DtPnfRopEZLq0v4TlRpupSG9153JQLwTeAqT/77vVy6UwsFaGxv9iyYGLJ7s1A/TYrzJZQUSYFdp4pRF2/BFYdZSr/OxPNDG4C/YxwTV2Goi0n1baiiMhH+OYVJ0X5Omd5jf/dliRknqkyV0N3rSq3P6RMZUII1UqpvQtLsB0xnYp0+2+KVra5GFCnDW7qXIjYIddhoSsvU2lzjYGEXJvihD82RAHWYgrPaflZi3SSpLwKbJrBder8d42M3O5GYOZCvZmGOxFHsYmFNSUryqR6qZPLqusnXc3sbMkc8ucR1JTK9Iudv+3JW7u4ffKqLduSVcd0ap6s0toSsjBfHQRzjcIsbcEkvMpuUAJWfYv+JwqmTJHGYWHLjLTPku3tQtp3jqBO3WKkhOCENQ6rk6Z9boOeVgXbWLgKG1JCKOfUqdsDd7oLEueLR0AeittYHG7sSCEYWv+memPN1sC18GONbm+iiM98PV9IQWEp3l1FSgjK9NHY2SeJeNYsvznggDtqDE+c/TJTuV4+tPVkLFZJ+Xq+yx+OgyXO8lr/bYE+2KphFZpH8aBCvp4vHOeAJc7SSAk2zexwGvmGzBirBt++Crl9z6OxhiMcrGLaiDmQrf8OZ5FryMRLNAk4GZZVScGJFThTTbAFbHdM5erdWecr9iFTiWmEte4msicdbkPYoU4td7mGTLwL7Ou1LtbzkdoTytS8EdUWoPMtUqiEszOMxXr+PVIIbmBMva78lk7lGjIzvxDWFztPqk2yGwmcjfX3mMrVLrMr3qNPwfqbZH8+PBsLtf7ShpldMZUtxWXnSsAeqWekEIzp1NRNBEzdEVHZ1j11KMzwHQhM9aI2Yaq4Vw/rS4exP9atXTRYKLz0HKJEZCoNNxznSmxZQPf6iExtqDcVFA0WCuc4me9R3KZ/SHbNS801SCtC+ZSvs2a0UBYq4fWSQpuAQQSYujCNElMxncrH/ruScJU5nEVU4gnKpIHIOWiK1h9nKjVQ8r7z7UiYfx3+YBqrww3J+qPn0S1ifxPZNVE02Hlgy3QpAfhUI3Xi4CZTrGlmlvk353sUdyIgd25GmE/AFGM+ScWcuNT6Az8VPeejqUWX224aohKS1PAq5/L1xY+JMCcO6lRsV5pe2l1aiubcrJynZszx9SGGGxXC1HYVWP9dzVQGSAVixUNOhzDc+FE4cOM+qlN3h6M1z8eEje70QBm4HXr7jYhLwPpOVv3EwOhTyG/QYzrctmj9K7/LVHbG6aoHuv1ThRtqpmI6dSdg0dPy8yRkDESm0t2KElN3FEaowHr4chx7IiN5EzNxxIlz29Ff0am0OWpFVUoxDZVOnMzUrRV7s8H87jW+oPAD8Dkaul8hr/XftoSXGygagjt1Js4BOhXdXLhdCWnXvr/BBxWngcjUhRP3J6w/O4Z36bk1Wfh6EfIbLNwAOhXb2rU9sCTN2stwAVCHI4V/RzwMZXbK146rpOyc4U2/RAfDjQ5lar7Yf0ugKW9L21BAKWdMM3G/av3LpMt09c+YqPAegkzcwjRC648c6rYN0LhCy9qcnx9PkTLccJxnoFN3Zf2Znlnx3H0UyUQwjSzcuIHWf0ezSJ+44qH0GXgEOpU4cW2QpUI6VIqFfkxJqm6FXgsDUPgn4QZg6tZ69AWwY5WK/Fxrcqcu/Ls30Ppvu0rKrcJVvyW0BFN14T+NqMRD3ZDDMgoDa91bN3BC8QXCDXPx4S/J+m+VqcwWLt3RvQZA4b9xjzB1i1VS/rDIoqdwhr6vDjd2yFT2lIJX4QJSuHHj7tT6c500q35SIDeGomkkRztL1n8rTOXPGqptEPpm40ks/JPuTfcAWv8tMPWIO/Rrw8AwC8knMI2L1L+7detfZrvj855iviZA4b+q3cyTxnD/W9HWv3zOuj6QNvbC8A0+xFzp3LjutnWqcBpWEXFhJtJwQxNljB4c98ABx78UqVP5QyrW+Ajr6ngMwTH91cOrnuNKTC2qm084L+ZijVrF6gCFf21WUa1ePbTb4pdiC9qfLwi47je7V0Uylr+X4VUrGvwWrtE92VhG4SNFWadDFoynWPnldwjbPtY3k1FoLMs+bLdgJHe1jI9mMFTs49IGMpb5gylW/obuhhi8QI2jhmF0W2s2aojdj37W8ULbQf8jn4y20TxurbEzsXxtc9rZD1b7mF5BMr7k46pZMTrds9ZJubyCnGJvp1/fSsi0HN+TC+WHlhRS2obZOe+eXR/peeQER9/+moApkulLEAc+9jUiIKZpNxqGdn58eqRnLU542IHv/wZFGb76dx+xJGWGzOl8Glr37AgRUi+fiudsBtHOlYyE5Ks/nHwEtTCM5whrtWgJfU3DTjWQgrDllrjVgXwK+y8gGQ2e+v3ptN9/Goz+DT5rS8ibzmXzVJxIvdw6B2e81opM/xaMwSSsL9FD6UxeMp9AL183gXzWrnzRNfE1fA2DJVrINi5T/Trby390rMHjzOvR7ynRnEi+x6+1ejZdbePq8uzssil9st4Kx39mCWYhGTxOglqcJeb84CbpowJBkPfjeX8Bt/33SadWC2dWJZ/x9C/e9mICRYwGqVV59TPnc0HQ+GPLOadtYpTSNsrUQFas/W0VmgOpBoqw2MSK/cc9JKiMpP95oZhIK67/P+Sb4/YOkNUKwo+956eIr7EWLpx2yw/CaPznLfzqSJ6Gn1E9DOvR5/Dp/0NPgGSU4n8r3Yb4D3GaX43lrR4GAAAAAElFTkSuQmCC'},
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
    } else if (reaction.description === 'Support') {
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
      {
        totalReations !== 0 ?

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
            <span style={{marginTop: 6, marginLeft: 10}}>{totalReations}</span>
          </div>
          : null
      }
      <CardActions disableSpacing>


        <Reactions onUpdate={onUpdate.bind(this)} items={imogies}>
          <IconButton
            // onClick={handlelikeFeed}
            aria-label="like"
            style={{color: like ? "#1485BD" : "gray"}}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column'
            }}>
              {reaction.img ? <>
                <img style={{height: 30, width: 30}} src={reaction.img} alt={'imgogi'} />
                <span style={{fontSize: 13, marginTop: 3, display: 'flex', justifyContent: 'center'}}>{reaction.description ? reaction.description : 'Like'}</span>

              </> :
                <ThumbUpIcon style={{color:'gray', fontSize: 35}} />
              }

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
