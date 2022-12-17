import { Box, Typography } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../util/firebase";
import { useEffect, useState } from "react";
import { Grocery, GroceryWithId } from "../../types";
import TransactionsList from "./TransactionsList";
import { useAuth } from "../auth/AuthUserProvider";

const groceriesCollectionRef = collection(db, "groceries");
const groceryQuery = query(groceriesCollectionRef);

const TransactionsDisplay = () => {
  const [groceries, setGroceries] = useState<GroceryWithId[] | null>(null);

  const { user } = useAuth();

  const groceryQuery = query(
    collection(db, "groceries"),
    where("owner", "==", user!.uid)
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(groceryQuery, (querySnapshot) => {
      const idList: GroceryWithId[] = [];
      querySnapshot.docs.map((x) => {
        const obj: Grocery = {
          name: x.get("name"),
          amount: x.get("amount"),
          owner: user!.uid,
        };
        const newObj = { ...obj, id: x.id };
        idList.push(newObj);
      });
      setGroceries(idList);
    });
    return unsubscribe;
  }, []);

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h4">Groceries</Typography>
      {groceries ? (
        <TransactionsList groceries={groceries} />
      ) : (
        <Typography>No transactions!</Typography>
      )}
    </Box>
  );
};

export default TransactionsDisplay;
