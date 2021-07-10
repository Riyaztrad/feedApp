import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../assets/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // paddingTop: 10,
    // paddingBottom: 10,
    // backgroundColor: "#24b877",
      backgroundColor: "#24b877",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    width: "20%",
    textalign: "right",
    // backgroundColor:'#fff'
  },
  caption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 8px",
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    paddingTop: 50,
    height: "100vh",
    overflow: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    color: "#fff",
  },
  addIcon: {
    height: 45,
    width: 45,
  },
}));

export const AppConainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} style={{ height: 90, width: 'auto' }} alt="logo 1" />
        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        <div>
          <div className={classes.appBarSpacer} />
          {children}
        </div>
      </main>
    </div>
  );
};
