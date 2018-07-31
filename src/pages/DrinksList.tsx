import * as React from "react";

import { IDrink } from 'src/drinks/Drinks'

import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core/styles";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Slide } from "@material-ui/core";

import { drinks } from 'src/drinks/Drinks'



const styles = (theme:Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 360,
        width: '100%',
    },
});

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

function DrinkListItem (props: {drink:IDrink, callback: ()=>void}){
    return (
        <ListItem dense={false} disabled={false} button={true} onClick={props.callback}>
          <ListItemText
              primary={props.drink.name}
              secondary={props.drink.ingredients.map((i) => i.ingredient.name.toLowerCase()).join(", ")}
          />
        </ListItem>
    );
}

interface IProps extends WithStyles<typeof styles> {
}

interface IState {
    open: boolean,
    drinks: IDrink[],
}

class DrinksList extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = ({
            drinks,
            open: false,
        });
    }

    public render(){
        return (
            <div className={this.props.classes.root}>
              <List>
                  {this.state.drinks.map((drink: IDrink) => (<DrinkListItem key={drink.name} drink={drink} callback={this.handleClickOpen}/>))}
              </List>
              <Dialog
                  open={this.state.open}
                  TransitionComponent={Transition}
                  keepMounted={true}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle id="alert-dialog-slide-title">
                    {"Don't forget your glass!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      If you want to order this drink, make sure the is an empty
                       glass on the trolley before continuing.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="secondary">
                      Cancel
                    </Button>
                    <Button onClick={this.handleClose} color="primary">
                      Lets go!
                    </Button>
                  </DialogActions>
                </Dialog>
            </div>
        );
    }

    private handleClickOpen = () => {
        this.setState({ open: true });
    };

    private handleClose = () => {
        this.setState({ open: false });
    };
}


export default withStyles(styles, { withTheme: true })(DrinksList);
