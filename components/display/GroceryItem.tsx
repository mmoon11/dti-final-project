import { Box, Typography } from "@mui/material";
import { GroceryWithId } from "../../types";

type Props = {
  readonly groceryName: string;
};

const TaskItem = ({ groceryName }: Props) => {
  return (
    <Box>
      <Typography>{groceryName}</Typography>
    </Box>
  );
};

export default TaskItem;
