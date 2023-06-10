import { Card, CardMedia, Typography } from "@mui/material";

import { Topic } from "../models";

type Props = {
  topic: Topic;
};

export default function VideoCard({ topic }: Props) {
  return (
    <Card variant="outlined" sx={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/200/300"
        alt="green iguana"
      />
      <Typography variant="body2" fontWeight="bold" padding="0.4rem">
        {topic.title}
      </Typography>
    </Card>
  );
}
