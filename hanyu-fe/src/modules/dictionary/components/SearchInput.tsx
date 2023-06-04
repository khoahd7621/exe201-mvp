import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function SearchInput() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" marginBottom={5}>
      <SearchBox id="search" type="search" placeholder="Tra cứu" variant="outlined" />
      <Button
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          height: "53px",
          width: 80,
          "&:hover": {
            backgroundColor: "#363636",
          },
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <SearchIcon />
      </Button>
    </Stack>
  );
}

const SearchBox = styled(TextField)({
  input: {
    width: 1200,
    height: "20px",
    fontWeight: 600,
    paddingLeft: 25,
    "&::placeholder": {
      fontWeight: 600,
    },
  },
  fieldset: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    "&::focus": {
      borderColor: "#000 !important",
      background: "#000",
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: "#000",
    },
  },
  "& .MuiOutlinedInput-root:focus": {
    "& > fieldset": {
      borderColor: "#000",
    },
  },
});
