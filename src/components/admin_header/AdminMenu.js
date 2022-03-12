import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function AdminMenu() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Админ-панель
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/admin/moderators" className={classes.link}>
              изменить список модераторов
            </Link>
            <Link to="/admin/drugs" className={classes.link}>
              изменить список лекарств
            </Link>
            <Link to="/admin/site" className={classes.link}>
              изменить наполнение сайта
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default AdminMenu;
