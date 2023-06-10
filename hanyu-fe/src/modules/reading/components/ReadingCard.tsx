import { useNavigate } from "react-router-dom";

import { Box, CardMedia, Stack, Typography } from "@mui/material";

import AppRoutes from "~/router/AppRoutes";
import { Reading } from "../models";

type Props = {
  data: Reading;
};

export default function ReadingCard({ data }: Props) {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={1}
      onClick={() => navigate(`${AppRoutes.reading}/${data.id}`)}
      sx={{
        "& + &": {
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e0e0e0",
        },
      }}
    >
      <Stack direction="row" gap={2} sx={{ cursor: "pointer" }}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            image={data.image}
            alt="Reading image cover"
            sx={{ width: "16rem", height: "9rem", borderRadius: "0.5rem" }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "0.5rem",
              right: "0.5rem",
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.2rem 0.5rem",
              borderRadius: "0.5rem",
            }}
          >
            {data.readMinutes} phút
          </Typography>
        </Box>
        <Stack spacing={1} flexGrow={1}>
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize={22}
            sx={{
              "&:hover": {
                color: "#7f180d",
              },
            }}
          >
            {data.title}
          </Typography>
          <Stack>
            <Typography variant="body1" color="#797979">
              Độ khó: {data.level}
            </Typography>
            <Typography variant="body1" color="#797979">
              Chủ đề: {data.topic.title}
            </Typography>
            <Typography variant="body1" color="#797979">
              {data.createdAt || new Date().toLocaleString("vi-VN")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
