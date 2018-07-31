import * as React from 'react';

import './App.css';

import AppBar from "@material-ui/core/AppBar/AppBar";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import DrinksList from 'src/pages/DrinksList';

import Drawer from '@material-ui/core/Drawer';

import { Link, Route } from "react-router-dom"

import SettingsPage from "src/pages/SettingsPage"


const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        position: 'fixed',
    },
    content: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: 1,
    },
    toolbar: theme.mixins.toolbar,
});

interface IProps extends WithStyles<typeof styles> {

}
interface IState {
    mobileOpen: boolean,
  };

class App  extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            mobileOpen: false,
        };
    }

    public render() {
        const { classes } = this.props;

        const drawer = (
          <div>
            <div className={classes.toolbar} />
            <Divider />
            <div>
                <List>
                  <ListItem >
                    <ListItemText>
                      <Link to="/menu">Menu</Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem >
                    <ListItemText>
                      <Link to="/settings">Settings</Link>
                    </ListItemText>
                  </ListItem>
                </List>
            </div>
          </div>
        );

        return (
                <div className={classes.root}>
                    <AppBar className={classes.appBar}>
                    <Toolbar>
                      <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerToggle}
                        className={classes.navIconHide}
                      >
                        Hello
                      </IconButton>
                      <Typography variant="title" color="inherit" noWrap={true}>
                        The Garrison
                      </Typography>
                    </Toolbar>
                    </AppBar>
                    <Hidden mdUp={true}>
                    <Drawer
                      variant="temporary"
                      anchor={'left'}
                      open={this.state.mobileOpen}
                      onClose={this.handleDrawerToggle}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                      }}
                    >
                      {drawer}
                    </Drawer>
                    </Hidden>
                    <Hidden smDown={true} implementation="css">
                    <Drawer
                      variant="permanent"
                      open={true}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                    >
                      {drawer}
                    </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />

                        <Route exact={true} path="/" component={DrinksList}/>
                        <Route exact={true} path="/menu" component={DrinksList}/>
                        <Route exact={true} path="/settings" component={SettingsPage}/>


                    </main>
                </div>
        );
    }

    private handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
}

export default withStyles(styles)(App);
