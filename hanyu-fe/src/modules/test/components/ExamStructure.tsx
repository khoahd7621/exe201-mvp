import { Link as RouterLink } from "react-router-dom";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";

import AppRoutes from "~/router/AppRoutes";
import { ExamStructure as StructureModel } from "../models/ExamStructure";

export interface ExamStructureProps {
  examName: string;
  structure: StructureModel;
}

const ExamStructure = ({ examName, structure }: ExamStructureProps) => (
  <>
    <Link
      component={RouterLink}
      to={AppRoutes.test}
      underline="hover"
      color="#000"
      fontSize="1.2rem"
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <KeyboardArrowLeftIcon />
        Trở về
      </Stack>
    </Link>

    <Typography variant="h5" component="div" margin="1rem 0" textAlign="center">
      {examName}
    </Typography>

    <Box>
      <Typography variant="body1" component="div">
        Bắt Đầu
      </Typography>
      <Box padding="0 2.4rem">
        {structure.map((item) => (
          <Typography
            key={item.name}
            component="div"
            sx={{
              position: "relative",
              padding: "3rem 0 2rem",
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                borderLeft: "1px solid #ccc",
                left: "50%",
                transform: "translateX(-50%)",
              },
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <Typography variant="body1" component="div">
                {item.totalTime}'
              </Typography>

              <Avatar
                children={item.hanyu}
                sx={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#f5deb3",
                  fontSize: "1rem",
                  color: "#000",
                  border: "1px solid #ccc",
                  position: "absolute",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  margin: "0 !important",
                  zIndex: 1,
                }}
              />
              <Stack direction="column" spacing={1}>
                {item.parts.map((part) => (
                  <Avatar
                    children={part.totalQuestion}
                    sx={{
                      width: "30px",
                      height: "30px",
                      fontSize: "0.8rem",
                      backgroundColor: "transparent",
                      color: "#000",
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Typography>
        ))}
      </Box>
      <Typography variant="body1" component="div">
        Kết thúc
      </Typography>
    </Box>
  </>
);

export default ExamStructure;
