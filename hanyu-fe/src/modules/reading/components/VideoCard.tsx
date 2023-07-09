import { useState } from "react";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Card, CardMedia, Modal, Typography } from "@mui/material";

import { VideoHoc } from "../models";

type Props = {
  video: VideoHoc;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function VideoCard({ video }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card variant="outlined" sx={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
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
      {open && (
        <Modal open={true} onClose={() => setOpen(false)}>
          <Box sx={{ ...style, width: "100%", maxWidth: "1000px", height: "600px" }}>
            <iframe
              width="100%"
              height="100%"
              src={video.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
        </Modal>
      )}
    </>
  );
}
