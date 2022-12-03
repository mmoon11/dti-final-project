import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  InputLabel,
  FormControl,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const TransactionAddControl = () => {
  return (
    <form>
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
          label="New Transaction"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select variant="standard" label="Category">
            <MenuItem value={"Groceries"}>Groceries</MenuItem>
            <MenuItem value={"Food"}>Food</MenuItem>
            <MenuItem value={"Clothing"}>Clothing</MenuItem>
            <MenuItem value={"Coffee"}>Coffee</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Add Transaction</Button>
      </Box>
    </form>
  );
};

export default TransactionAddControl;
