export type Grocery = {
  name: string;
  amount: number;
  owner: string;
};

export type GroceryWithId = Grocery & {
  id: string;
};
