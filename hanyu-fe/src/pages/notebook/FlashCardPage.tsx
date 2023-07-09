import { useEffect, useMemo, useState } from "react";
import { Navigate, Link as RouterLink, useParams } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Container, Link, Paper, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { toast } from "react-toastify";

import { Seo } from "~/common/components";
import noteBookApi from "~/modules/notebook/apis/noteBookApis";
import { Flashcard } from "~/modules/notebook/components";
import ListNoteBooks from "~/modules/notebook/datas/ListNoteBooks";
import ListWords from "~/modules/notebook/datas/ListWords";
import { NoteBook, WordNote } from "~/modules/notebook/models";
import { Word } from "~/modules/notebook/models/Word";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";

export default function FlashCardPage() {
  const { noteBookSlug } = useParams<{ noteBookSlug: string }>();
  const profile = useAppSelector((state) => state.profile.user);

  const currentNoteBook: NoteBook | undefined = ListNoteBooks.find(
    (item) => item.slug === noteBookSlug
  );

  const listWords: Word[] = useMemo(() => {
    if (!currentNoteBook) return [];
    return ListWords.filter((item) => item.noteBookId === currentNoteBook.id);
  }, [currentNoteBook]);

  const [wordNotes, setWordNotes] = useState<WordNote[]>([]);

  useEffect(() => {
    fetchListWordNotes();
  }, []);

  const fetchListWordNotes = () => {
    noteBookApi
      .getListWordNotes()
      .then((res) => setWordNotes(res))
      .catch((err) => console.log(err));
  };

  if (!currentNoteBook) {
    return <Navigate to={AppRoutes.notebook} />;
  }

  if (currentNoteBook.isPremium && !profile.isSubscribed) {
    toast.error("Bạn cần nâng cấp tài khoản để sử dụng tính năng này");
    return <Navigate to={AppRoutes.notebook} />;
  }

  return (
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Flashcard",
          description: "Panda Hanyu Flashcard",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.notebook}/${currentNoteBook.slug}/flashcard`,
          href: `${AppRoutes.notebook}/${currentNoteBook.slug}`,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
        <Stack spacing={2}>
          <Link
            component={RouterLink}
            to={`${AppRoutes.notebook}/${currentNoteBook.slug}`}
            underline="hover"
            sx={{
              color: "#000",
              "&:hover": {
                color: "#333",
              },
            }}
          >
            <Stack direction="row" alignItems="center">
              <ArrowBackIosIcon sx={{ fontSize: 14 }} />

              <Typography variant="body2" fontWeight="bold">
                Trở về
              </Typography>
            </Stack>
          </Link>

          <Stack direction="row" justifyContent="center">
            <Paper
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: "800px",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <Carousel
                navButtonsAlwaysVisible={true}
                indicators={false}
                animation="slide"
                autoPlay={false}
                swipe={false}
                cycleNavigation={false}
              >
                {listWords.length > 0 ? (
                  listWords.map((item) => {
                    const wordNote = wordNotes.find((wordNote) => wordNote.wordId === item.id);
                    return <Flashcard key={item.id} data={item} wordNote={wordNote} />;
                  })
                ) : (
                  <Typography variant="body2" textAlign="center">
                    Không tìm thấy từ vựng nào
                  </Typography>
                )}
              </Carousel>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
