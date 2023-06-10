import { Typography } from "@mui/material";

import { Topic } from "../models";

type Props = {
  topic: Topic;
};

export default function TopicButton({ topic }: Props) {
  return (
    <Typography
      key={topic.id}
      variant="body1"
      sx={{
        color: "#7f180d",
        boder: "1px solid #d8d8d8",
        backgroundColor: "#f4e2e1",
        borderRadius: "1rem",
        padding: "0.2rem 1rem",
        cursor: "pointer",
        marginRight: "1rem",
        marginBottom: "0.5rem",
        "&:hover": {
          backgroundColor: "#7f180d",
          color: "#fff",
        },
      }}
    >
      {topic.title}
    </Typography>
  );
}
