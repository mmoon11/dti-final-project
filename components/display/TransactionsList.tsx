import { Box, Typography } from "@mui/material";
import { GroceryWithId } from "../../types";
import GroceryItem from "./GroceryItem";

type Props = {
  readonly groceries: GroceryWithId[];
};

const TransactionsList = ({ groceries }: Props) => {
  return (
    <Box>
      {groceries.length ? (
        groceries.map((grocery) => (
          <GroceryItem key={grocery.id} grocery={grocery} />
        ))
      ) : (
        <Typography>No transactions!</Typography>
      )}
    </Box>
  );
};

export default TransactionsList;
