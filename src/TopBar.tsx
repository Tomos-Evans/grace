import * as React from "react";

import classNames from 'classnames';

import AppBar from "@material-ui/core/AppBar/AppBar";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton/IconButton";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from '@material-ui/icons/Menu';

import { Divider, Drawer, List } from "@material-ui/core";

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp,
        }),
    },
    appBarShift: {
        transition: theme.transitions.create(['margin', 'width'], {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut,
        }),
        width: `calc(100% - ${drawerWidth}px)`,
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    appFrame: {
        display: 'flex',
        height: 430,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: 1,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            duration: theme.transitions.duration.leavingScreen,
            easing: theme.transitions.easing.sharp,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            duration: theme.transitions.duration.enteringScreen,
            easing: theme.transitions.easing.easeOut,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
    drawerHeader: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
        padding: '0 8px',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    root: {
      flexGrow: 1,
    },
  });


interface IProps extends WithStyles<typeof styles> {
    pageTitle: string,
}
interface IState {
    open: boolean,
    anchor: "left" | "right" | "bottom" | "top" | undefined,
}

class TopBar extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            anchor: 'left',
            open: false,
        };
    }

    public render() {
          const { classes } = this.props;
          const { anchor, open } = this.state;

          const drawer = (
            <Drawer
              variant="persistent"
              anchor={anchor}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                   <MenuIcon />
                </IconButton>
              </div>
              <Divider />
              <List/>                                                    // Idems in here
              <Divider />
              <List/>                                                         // Idems in here
            </Drawer>
          );

          let before = null;
          let after = null;

          if (anchor === 'left') {
            before = drawer;
          } else {
            after = drawer;
          }

          return (
            <div className={classes.root}>
              <div className={classes.appFrame}>
                <AppBar
                  className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    [classes[`appBarShift-${anchor}`]]: open,
                  })}
                >
                  <Toolbar disableGutters={!open}>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.handleDrawerOpen}
                      className={classNames(classes.menuButton, open && classes.hide)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap={true}>
                      Persistent drawer
                    </Typography>
                  </Toolbar>
                </AppBar>
                {before}
                <main
                  className={classNames(classes.content, classes[`content-${anchor}`], {
                    [classes.contentShift]: open,
                    [classes[`contentShift-${anchor}`]]: open,
                  })}
                >
                  <div className={classes.drawerHeader} />
                  <Typography>{'You think water moves fast? You should see ice.'}</Typography>
                </main>
                {after}
              </div>
            </div>
          );
        }


    private handleDrawerOpen = (event: any) => {
        this.setState({
            open: true,
        });
    }

    private handleDrawerClose = (event: any) => {
        this.setState({
            open: false,
        });
    }
}

export default withStyles(styles, { withTheme: true })(TopBar);
