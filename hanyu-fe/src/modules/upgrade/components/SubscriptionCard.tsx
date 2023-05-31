import { Stack, Typography } from "@mui/material";

import { Subscription } from "../models/Subscription";

type Props = {
  subscription: Subscription;
  handleOpenModal: () => void;
};

export default function SubscriptionCard({ subscription, handleOpenModal }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        position: "relative",
        cursor: "pointer",
        padding: "1rem",
        borderRadius: "0.8rem",
        backgroundColor: "#fff",
        overflow: "hidden",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        "&:hover": {
          boxShadow:
            "rgb(0 121 255 / 40%) 0px 0px 0px 2px, rgb(255 0 0 / 65%) 0px 4px 6px -1px, rgb(42 19 19 / 8%) 0px 1px 0px inset",
        },
      }}
      onClick={handleOpenModal}
    >
      <Stack>
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          {subscription.name}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {subscription.description}
        </Typography>
      </Stack>

      <Typography variant="h5" fontWeight="bold" textAlign="center">
        {subscription.price}
      </Typography>

      {subscription.isBest && (
        <Typography
          sx={{
            position: "absolute",
            top: "47px",
            right: "-75px",
            textAlign: "center",
            fontWeight: "medium",
            width: "120px",
            transform: "translateX(-50%)",
            padding: "0.3rem 1rem",
            color: "#fff",
            backgroundColor: "red",
            rotate: "40deg",
          }}
        >
          BEST
        </Typography>
      )}
    </Stack>
  );
}
