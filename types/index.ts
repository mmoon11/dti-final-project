export type Grocery = {
  name: string;
  amount: number;
};

export type GroceryWithId = Grocery & {
  id: string;
};
