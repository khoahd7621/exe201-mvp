import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Button, Rating, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import ratingApi from "../apis/ratingApi";
import { Rating as RatingMD } from "../models";

export default function RatingForm() {
  const [star, setStar] = useState<number | null>(5);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [rating, setRating] = useState<RatingMD | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  useEffect(() => {
    fetchUserRating();
  }, []);

  const fetchUserRating = () => {
    setLoading(true);
    ratingApi
      .fetchMyRating()
      .then((res) => {
        setRating(res);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    if (star === null) {
      toast.error("Bạn chưa chọn số sao");
      return;
    }
    if (comment.trim() === "") {
      toast.error("Bạn chưa nhập cảm nhận");
      return;
    }
    setSending(true);
    ratingApi
      .create({ star, description: comment })
      .then(() => {
        toast.success("Đánh giá thành công");
        setStar(5);
        setComment("");
        fetchUserRating();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Đánh giá thất bại. Vui lòng thử lại sau.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {rating ? (
        <Stack direction="column" spacing={3}>
          <Typography variant="body1" component="div">
            Đánh giá của bạn
          </Typography>
          <Rating name="simple-controlled" value={rating.star} readOnly />
          <TextField multiline rows={4} size="medium" value={rating.description} disabled />
        </Stack>
      ) : (
        <Stack direction="column" spacing={2}>
          <Typography variant="body1" component="div">
            Để lại cảm nhận của bạn về ứng dụng để chúng tôi có thể cải thiện hơn ^^
          </Typography>
          <Rating
            name="simple-controlled"
            value={star}
            onChange={(_event, newValue) => {
              setStar(newValue);
            }}
            disabled={sending}
          />
          <TextField
            placeholder="Đánh giá của bạn ..."
            multiline
            rows={6}
            size="medium"
            value={comment}
            onChange={(e) => {
              if (e.target.value.length <= 999) {
                setComment(e.target.value);
              }
            }}
            disabled={sending}
          />
          <Stack direction="row" justifyContent="flex-end">
            {comment.length}/999 ký tự
          </Stack>
          <Button
            variant="contained"
            sx={{
              padding: "0.6rem 0",
              backgroundColor: "#ff5722",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ff7122",
                color: "#fff",
              },
            }}
            onClick={handleSubmit}
            disabled={sending}
          >
            Đánh giá
          </Button>
        </Stack>
      )}
    </>
  );
}
