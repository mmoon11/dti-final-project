import { Box, Typography } from "@mui/material";
import { GroceryWithId } from "../../types";

type Props = {
  readonly groceryName: string;
};

const GroceryItem = ({ groceryName }: Props) => {
  return (
    <Box>
      <Typography>{groceryName}</Typography>
    </Box>
  );
};

export default GroceryItem;
