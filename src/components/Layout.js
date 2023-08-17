import { makeStyles } from "@mui/styles";
import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
      background: "#EADBC8",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      marginLeft: drawerWidth,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      background: "#f9f9f9",
    },
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "All Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  const imageUrl =
    "https://lh3.googleusercontent.com/a/AAcHTtc5durmesz--lmeerAttsw28nWVK6z2Qd4tqaYy6IDwPiE4=s260-c-no";

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        style={{ width: `calc(100% - ${drawerWidth}px)` }}
        // className={classes.appBar}

        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Julia Davydenko</Typography>
          <Avatar src={imageUrl} className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            My Notes
          </Typography>
        </div>

        {/* list/links */}

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
