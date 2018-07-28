import * as React from "react";

import AppBar from "@material-ui/core/AppBar/AppBar";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton/IconButton";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from '@material-ui/icons/Menu';

import { Divider, Drawer, Hidden, List } from "@material-ui/core";

const drawerWidth = 240;

const styles = (theme:Theme) => createStyles({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        position: 'absolute',
    },
    content: {
        backgroundColor: theme.palette.background.default,
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
        height: 430,
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

class TopBar extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            mobileOpen: false,
        };
    }

    public render(){
        const { classes } = this.props;

        const drawer = (
          <div>
            <div className={classes.toolbar} />
            <Divider />
            <List /> // this
            <Divider />
            <List/> // this
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
                  <MenuIcon />
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
              <Typography noWrap={true}>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
          </div>
        );
  }

  private handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
}

export default withStyles(styles, { withTheme: true })(TopBar);
