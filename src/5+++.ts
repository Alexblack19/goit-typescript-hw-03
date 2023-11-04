type Fruit = {
  apple: number;
  banana: number;
  orange: number | string;
};

const fruit: Fruit = {
  apple: 23,
  banana: 45,
  orange: "76",
};

fruit.orange = 78;
