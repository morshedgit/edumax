import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  removeTextDecoration: {
    textDecoration: "none",
  },
  active:{
      color:'red'
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">Welcome</Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" flexDirection="row" justifyContent="start" alignItems="center">
          <Link className={classes.removeTextDecoration} color="primary"  to="/">
            <Button>Home</Button>
          </Link>
          <Link className={classes.removeTextDecoration} color="primary"  to="/about">
            <Button>About</Button>
          </Link>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="end" alignItems="center">
          <Link className={classes.removeTextDecoration} color="primary"  to="/login">
            <Button>Login</Button>
          </Link>
          <Link className={classes.removeTextDecoration} color="primary"  to="/signup">
            <Button>Signup</Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
