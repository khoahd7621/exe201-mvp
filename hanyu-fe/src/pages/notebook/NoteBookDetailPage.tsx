import { useEffect, useMemo, useState } from "react";
import { Navigate, Link as RouterLink, useParams } from "react-router-dom";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import StyleIcon from "@mui/icons-material/Style";
import { Container, Grid, Link, Pagination, Paper, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";

import { Seo } from "~/common/components";
import { useDebounced } from "~/hooks/useDebounced";
import noteBookApi from "~/modules/notebook/apis/noteBookApis";
import { WordCard } from "~/modules/notebook/components";
import ListNoteBooks from "~/modules/notebook/datas/ListNoteBooks";
import ListWords from "~/modules/notebook/datas/ListWords";
import { NoteBook, WordNote } from "~/modules/notebook/models";
import { Word } from "~/modules/notebook/models/Word";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";

export default function NoteBookDetailPage() {
  const { noteBookSlug } = useParams<{ noteBookSlug: string }>();
  const profile = useAppSelector((state) => state.profile.user);
  const auth = useAppSelector((state) => state.auth);

  const currentNoteBook: NoteBook | undefined = ListNoteBooks.find(
    (item) => item.slug === noteBookSlug
  );

  const listWords: Word[] = useMemo(() => {
    if (!currentNoteBook) return [];
    return ListWords.filter((item) => item.noteBookId === currentNoteBook.id);
  }, [currentNoteBook]);

  const [listWordsFiltered, setListWordsFiltered] = useState<Word[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [wordNotes, setWordNotes] = useState<WordNote[]>([]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const itemOffset = (currentPage - 1) * itemsPerPage;
  const pageCount = Math.ceil(listWordsFiltered.length / itemsPerPage);
  const currentItems = listWordsFiltered.slice(itemOffset, itemOffset + itemsPerPage);

  const keyword = useDebounced(searchInput, 300);

  useEffect(() => {
    if (auth.isAuthenticated) {
      fetchListWordNotes();
    }
  }, [auth]);

  useEffect(() => {
    if (keyword) {
      const newListWordsFiltered = listWords.filter((item) => {
        const word = item.word.toLowerCase();
        const meaning = item.meaning.toLowerCase();
        const pinyin = item.pinyin.toLowerCase();
        const keywordLowerCase = keyword.toLowerCase();

        return (
          word.includes(keywordLowerCase) ||
          meaning.includes(keywordLowerCase) ||
          pinyin.includes(keywordLowerCase)
        );
      });

      setListWordsFiltered(newListWordsFiltered);
    } else {
      setListWordsFiltered(listWords);
    }
    setCurrentPage(1);
  }, [keyword, listWords]);

  const fetchListWordNotes = () => {
    noteBookApi
      .getListWordNotes()
      .then((res) => setWordNotes(res))
      .catch((err) => console.log(err));
  };

  const changePage = (page: number) => {
    setCurrentPage(page);
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
          title: "Panda Hanyu | Sổ Tay Chi Tiết",
          description: "Panda Hanyu Sổ Tay Chi Tiết",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.notebook}/${currentNoteBook.slug}`,
          href: `${AppRoutes.notebook}/${currentNoteBook.slug}`,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
        <Grid container spacing={4}>
          {/* Left bar */}
          <Grid item xs={12} md={4} lg={3}>
            <Stack spacing={2}>
              <Paper variant="outlined" sx={{ borderRadius: "0.5rem", padding: "0.8rem" }}>
                <Stack>
                  <Link
                    component={RouterLink}
                    to={AppRoutes.notebook}
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

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    marginBottom={1}
                    textAlign="center"
                    margin="0.5rem 0"
                  >
                    {currentNoteBook.title}
                  </Typography>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" gap={1}>
                      <EditNoteIcon />
                      <Typography variant="body2" fontWeight="bold">
                        {currentNoteBook.totalWords}w
                      </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" gap={1}>
                      <HistoryIcon />
                      <Typography variant="body2" fontWeight="bold">
                        {currentNoteBook.createdAt}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>

              <Link
                component={RouterLink}
                to={`${AppRoutes.notebook}/${noteBookSlug}/flashcard`}
                underline="hover"
              >
                <Paper variant="outlined" sx={{ borderRadius: "0.5rem", padding: "0.8rem" }}>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <StyleIcon />
                    <Typography variant="body2" fontWeight="600">
                      Flashcard
                    </Typography>
                  </Stack>
                </Paper>
              </Link>

              <Paper
                variant="outlined"
                sx={{
                  borderRadius: "0.5rem",
                  padding: "0.8rem",
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                <Stack direction="row" gap={1}>
                  <input
                    type="text"
                    placeholder="Search"
                    style={{
                      border: "none",
                      outline: "none",
                      flexGrow: 1,
                      fontSize: "1rem",
                    }}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  {searchInput && (
                    <ClearIcon
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => setSearchInput("")}
                    />
                  )}
                  <SearchIcon
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Stack>
              </Paper>
            </Stack>
          </Grid>

          {/* Main content */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper variant="outlined" sx={{ borderRadius: "0.5rem", padding: "1rem" }}>
              <Stack spacing={2}>
                <Stack spacing={2}>
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => {
                      const wordNote = wordNotes.find((wordNote) => wordNote.wordId === item.id);
                      return (
                        <WordCard
                          key={item.id}
                          word={item}
                          wordNote={wordNote}
                          fetchListWordNotes={fetchListWordNotes}
                        />
                      );
                    })
                  ) : (
                    <Typography variant="body2" textAlign="center">
                      Không tìm thấy từ vựng nào
                    </Typography>
                  )}
                </Stack>
                <Pagination
                  page={currentPage}
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  onChange={(_event, value) => changePage(value)}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
