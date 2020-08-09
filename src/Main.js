import React from "react";
import Routes from "./routes/Routes";
import { Grid, withStyles } from "@material-ui/core";
import Navigation from "./app-bar/Navigation";
import AppContainer from "./context-containers/AppContainer";
import UserContainer from "./context-containers/UserContainer";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
});
function Main({ classes }) {
  return (
    <UserContainer>
      <AppContainer>
        <Grid container direction="row">
          <Grid item md={12}>
            <Navigation />
          </Grid>
          <Grid className={classes.root} item lg={12}>
            <Routes />
          </Grid>
        </Grid>
      </AppContainer>
    </UserContainer>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
