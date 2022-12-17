import { Box, Button, TextField, InputAdornment } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FormEventHandler, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../util/firebase";
import { Grocery } from "../../types";

const TransactionAddControl = () => {
  const [groceryInput, setGroceryInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroceryInput(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountInput(parseFloat(event.target.value));
  };

  const addGrocery = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (groceryInput == "" || amountInput == 0) return;

    const grocery: Grocery = {
      name: groceryInput,
      amount: amountInput,
    };
    const groceriesCollectionRef = collection(db, "groceries");
    await addDoc(groceriesCollectionRef, grocery);

    setGroceryInput("");
    setAmountInput(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 1,
        gap: 1,
        alignItems: "center",
      }}
    >
      <TextField
        variant="standard"
        label="Transaction Name"
        margin="normal"
        value={groceryInput}
        onChange={handleChange1}
      ></TextField>

      <TextField
        variant="standard"
        label="New Transaction"
        margin="normal"
        value={amountInput}
        onChange={handleChange2}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>

      <Button variant="contained" onClick={addGrocery}>
        Add Transaction
      </Button>
    </Box>
  );
};

export default TransactionAddControl;
