import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
// import {createTheme} from '@mui/icons-material/Style'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { useTheme, useMediaQuery } from "@material-ui/core";
import logo from "../../assets/logo_new.png";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: "left",
    display: "flex",
    fontFamily: "Raleway",
  },
  font: {
    fontFamily: "arial",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    
    background:'#F9F9F9'
  },
}));

export const AppConainer = ({ children }) => {
  const classes = useStyles();

  //BreakPoint
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider>
      {/* <Box sx={{ flexGrow: 1 }}> */}
        {/* <AppBar position="static" style={{ backgroundColor: "white" }}> */}
          {/* <Toolbar
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          > */}
            <Grid container spacing={1}>
              <Grid item xs={isMatch ? 6 :2}>
                <img
                  src={logo}
                  style={{
                    height: 60,
                    width: 400,
                    marginLeft: "-1rem",
                    margin: "auto",
                    marginTop: isMatch ? "0" : ".5rem",
                  }}
                  alt="logo 1"
                />
              </Grid>
              {isMatch ? (
                <DrawerComponent />
              ) : (
                <>
                  <Grid item xs={6}>
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "90%",
                        flexDirection: "row",
                        marginTop: "1.5rem",
                        marginLeft: "2rem",
                        alignItems: "center",
                      }}
                    >
                      <li
                        herf="/home"
                        style={{
                          display: "inline",
                          color: "black",
                          cursor: "pointer",
                          fontFamily: "Exo 2, sans-serif",
                        }}
                      >
                    
                        Home
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        Explore{" "}
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        Recurring{" "}
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        How It Works
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        News
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        Blog
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        About
                      </li>
                      <li
                        style={{
                          display: "inline",
                          color: "#909090",
                          cursor: "pointer",
                        }}
                      >
                        Contact
                      </li>
                    </ul>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{ backgroundColor: "#0C9463", height: 75 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width:"80%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginTop: "1rem",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          cursor: "pointer",
                          color:'#F1F1F1', 
                          opacity:'.7'
                        }}
                        variant="contained"
                    
                      >
                        Log In
                      </Typography>
                      <Typography
                        style={{
                          borderRight: "#F1F1F1",
                        //   color:'#F1F1F1', 
                          opacity:'.7',
                          backgroundColor: "transparent",
                          cursor: "pointer",
                          borderLeft: "1px solid white",
                          height: "20px",
                        //   position: "absolute",
                        }}
                        variant="contained"
                        className=" border-white"
                        // color="secondary"
                      ></Typography>
                      <Typography
                        style={{
                          border: "none",
                          backgroundColor: "transparent",
                          cursor: "pointer",
                          color:'#F1F1F1', 
                          opacity:'.7'
                        }}
                        variant="contained"
                        color="secondary"
                      >
                        Sign Up
                      </Typography>
                      <Button
                        style={{
                          border: "none",
                          backgroundColor: "#1E6F5C",
                          color:'white',
                          fontWeight:'500',
                        //   fontSize:"1rem",
                        //   opacity:'.7',
                          width: "10rem",
                          textTransform:'capitalize'
                        }}
                        variant="contained"
                        // color="secondary"
                      >
                        Create Compaign
                      </Button>
                    </div>
                  </Grid>
                </>
              )}
            </Grid>
          {/* </Toolbar> */}
        {/* </AppBar> */}
        <main className={classes.content}>
          <div>
            <div className={classes.appBarSpacer} />
            {children}
          </div>
        </main>
      {/* </Box> */}
    </ThemeProvider>
  );
};
