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


export const drinks:IDrink[] = [
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "dissorano"}, units: 2},
            {ingredient: {name: "coke"}, units: 100},
        ],
        name: "God Father"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw drivedr2"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver2"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver3"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver4"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver5"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver6"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw drive7r"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw drive8r"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw drive9r"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver0"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver11"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver12"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw drive23r"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver34"
    },
    {
        ingredients: [
            {ingredient: {name: "vodka"}, units: 3},
            {ingredient: {name: "orange"}, units: 200},
        ],
        name: "Screw driver45"
    },
];
