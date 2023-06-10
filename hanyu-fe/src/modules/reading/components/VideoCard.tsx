import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Card, CardMedia, Typography } from "@mui/material";

import { VideoHoc } from "../models";
import { toast } from "react-toastify";

type Props = {
  video: VideoHoc;
};

export default function VideoCard({ video }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{ cursor: "pointer" }}
      onClick={() => toast.info("Tính năng sắp hoàn thiện rùi, chờ thêm xíu nhen 😘")}
    >
      <Box
        sx={{
          position: "relative",
          "&:hover .media": {
            display: "flex",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: {
              xs: "100%",
              md: "12rem",
              lg: "10rem",
            },
          }}
          image={video.thumbnail}
          alt="green iguana"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
          className="media"
        >
          <PlayCircleIcon
            sx={{
              fontSize: "3rem",
              color: "#fff",
            }}
          />
        </Box>
      </Box>
      <Typography variant="body2" fontWeight="bold" padding="0.4rem">
        {video.title}
      </Typography>
    </Card>
  );
}
