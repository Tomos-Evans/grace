import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";

import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

export interface IDrink {
    ingredients: Array<{ingredient: IIngredient, units: number}>,
    name: string,
}

export interface IIngredient {
    name: string,
}

export interface IAlcoholicIngredient extends IIngredient {
    abs: number,
}


const styles = (theme:Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 360,
        width: '100%',
    },
});

function DrinkListItem (props: {drink:IDrink}){
    return (
        <ListItem dense={true}>
          <ListItemText
              primary={props.drink.name}
              secondary={props.drink.ingredients.map((i) => i.ingredient.name.toLowerCase()).join(", ")}
          />
        </ListItem>
    );
}

interface IProps extends WithStyles<typeof styles> {
    drinks: IDrink[],
}

class DrinksList extends React.Component<IProps> {

    public render(){
        return (
            <div className={this.props.classes.root}>
              <List>
                  {this.props.drinks.map((drink: IDrink) => (<DrinkListItem drink={drink}/>))}
              </List>
            </div>
        );
    }
}


export default withStyles(styles, { withTheme: true })(DrinksList);
