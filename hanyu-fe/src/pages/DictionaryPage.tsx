import { Button, Grid, Stack, Paper, Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Carousel from "react-material-ui-carousel";
import { wrap } from "module";

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

export default function DictionaryPage() {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: "https://static.vecteezy.com/system/resources/previews/005/161/901/original/cute-funny-baby-panda-hanging-on-the-bamboo-free-vector.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: "https://media.istockphoto.com/id/902296516/vector/set-of-pandas-vector-illustration.jpg?s=612x612&w=0&k=20&c=Dq-xDL-C_Ag9j-_aAEUIgRIWPMCBdScmYYSvkCKz4EE=",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
      img: "https://i.ytimg.com/vi/Ji7FnAWO96o/maxresdefault.jpg",
    },
  ];
  return (
    <>
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 5, mb: 5 }}
      >
        <SearchBox id="search" type="search" placeholder="Search here" variant="outlined" />
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

      <Grid container alignItems="flex-start" justifyContent="center" maxWidth="110rem" margin="auto" spacing={2}>
        <Grid item xs={2}>
          <Stack display={"flex"} direction={"column"}>
            <Box>
              <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 600, mb: 2 }}>
                Hot search
              </Typography>
              <Box display={"flex"} flexWrap={"wrap"}>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  事实事
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  Teacher
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事实实
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  Student
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事实实
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontSize: 13, fontWeight: 600, mb: 2 }}>
                History
              </Typography>
              <Box display={"flex"} flexWrap={"wrap"}>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  事实事
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  Panda
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事实实
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  实事实实
                </Box>
                <Box
                  sx={{
                    p: "6px",
                    m: 1,
                    alignItems: "center",
                    background: "#fff",
                    boder: 1,
                    borderColor: "#000",
                    borderRadius: "16px",
                    width: "auto",
                  }}
                >
                  Hanyu
                </Box>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            {" "}
            <Carousel>
              {items.map((item, i) => (
                <Box key={i} sx={{ m: 1, display: "flex", alignItems: "center" }}>
                  {" "}
                  <img src={item.img} alt="Hanyu Banner" width="740" height="360" />
                </Box>
              ))}
            </Carousel>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Typography variant="body2" sx={{ fontWeight: 600, pt: 1, pl: 1 }}>
              Rankings
            </Typography>
            <Stack display={"flex"} direction={"row"}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "30px",
                  m: 2,
                  "&:hover": {
                    cursor: 'pointer',
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                    background: "#f8f8f8",
                  },
                  "&:focus": {
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                  },
                }}
                
              >
                <Typography variant="body2" sx={{ color: "#6c757d", fontSize: "12px" }}>
                  Day
                </Typography>
              </Button>
              <Button            
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "30px",
                  m: 2,
                  "&:hover": {
                    cursor: 'pointer',
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                    background: "#f8f8f8",
                  },
                  "&:focus": {
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                  },
                }}
              >
                <Typography variant="body2" sx={{ color: "#6c757d", fontSize: "14px" }}>
                  Week
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  height: "30px",
                  m: 2,
                  "&:hover": {
                    cursor: 'pointer',
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                    background: "#f8f8f8",
                  },
                  "&:focus": {
                    border: 1,
                    borderColor: "#ccd0d5",
                    borderRadius: 1,
                  },
                }}
              >
                <Typography variant="body2" sx={{ color: "#6c757d", fontSize: "14px" }}>
                  Month
                </Typography>
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
