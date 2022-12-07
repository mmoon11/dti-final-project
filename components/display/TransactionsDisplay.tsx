import { Box, Typography } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../util/firebase";
import { useEffect, useState } from "react";
import { Grocery, GroceryWithId } from "../../types";
import TransactionsList from "./TransactionsList";

const groceriesCollectionRef = collection(db, "groceries");
const groceryQuery = query(groceriesCollectionRef);

const TransactionsDisplay = () => {
  const [groceries, setGroceries] = useState<GroceryWithId[] | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(groceryQuery, (querySnapshot) => {
      const idList: GroceryWithId[] = [];
      querySnapshot.docs.map((x) => {
        const obj: Grocery = {
          name: x.get("name"),
          amount: x.get("amount"),
        };
        const newObj = { ...obj, id: x.id };
        idList.push(newObj);
      });
      setGroceries(idList);
    });
    return unsubscribe;
  }, []);

  return (
    <Box>
      <Typography>Groceries</Typography>
      {groceries ? (
        <TransactionsList groceries={groceries} />
      ) : (
        <Typography>No transactions!</Typography>
      )}
    </Box>
  );
};

export default TransactionsDisplay;
