import { Box, IconButton, Typography } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../util/firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import { GroceryWithId } from "../../types";

type Props = {
  readonly grocery: GroceryWithId;
};

const GroceryItem = ({ grocery: { name, amount, id } }: Props) => {
  const specificDocRef = doc(db, "groceries", id);

  const deleteTask = async () => {
    await deleteDoc(specificDocRef);
  };

  return (
    <Box
      sx={{
        margin: 1,
        display: "flex",
        gap: 3,
      }}
    >
      <Typography>{name}</Typography>
      <Typography>{amount}</Typography>
      <IconButton size="small" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default GroceryItem;
