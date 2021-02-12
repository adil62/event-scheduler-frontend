import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

import Sidebar from "./Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%!important",
    "& .MuiDrawer-docked": {
      height: "100%",
    },
  },

  toolbar: {
    paddingRight: 24,
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    height: "100%!important",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto",
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
}));

const Dashboard = ({ content: Content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleDrawerClose = () => {
    setIsSidebarOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Grid item sm={12}>
          <AppBar
            position="absolute"
            className={classNames(
              classes.appBar,
              isSidebarOpen && classes.appBarShift
            )}
          >
            <Toolbar
              disableGutters={!isSidebarOpen}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  isSidebarOpen && classes.menuButtonHidden
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap>
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item sm={2}>
          <Drawer
            variant="permanent"
            open={isSidebarOpen}
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !isSidebarOpen && classes.drawerPaperClose
              ),
            }}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <Sidebar />
          </Drawer>
        </Grid>
        <Grid item sm={10}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Content />
          </main>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
