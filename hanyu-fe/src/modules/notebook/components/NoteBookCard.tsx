import { useNavigate } from "react-router-dom";

import { Avatar, Card, Grid, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";

import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";
import { NoteBook } from "../models";

type Props = {
  notebook: NoteBook;
};

export default function NoteBookCard({ notebook }: Props) {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);
  const navigate = useNavigate();

  const handleClickCard = () => {
    if (notebook.isPremium) {
      if (!auth.isAuthenticated) {
        toast.error("Bạn cần đăng nhập để sử dụng tính năng này");
        return;
      }
      if (!profile.isSubscribed) {
        toast.error("Bạn cần nâng cấp tài khoản để sử dụng tính năng này");
        return;
      }
    }
    navigate(`${AppRoutes.notebook}/${notebook.slug}`);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        variant="outlined"
        sx={{
          padding: "0.8rem",
          cursor: "pointer",
          "&:hover": {
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          },
        }}
        onClick={handleClickCard}
      >
        <Stack direction="row" gap={1} alignItems="center">
          <Avatar children={notebook.title.charAt(0)} sx={{ width: 32, height: 32 }} />
          <Stack
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            flexGrow={1}
          >
            <Typography fontSize={14} fontWeight="bold" noWrap>
              {notebook.title}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize={12}>{notebook.totalWords}w</Typography>
              <Typography fontSize={12}>{notebook.createdAt}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
}
