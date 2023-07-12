import { useMemo } from "react";
import { Navigate, Link as RouterLink, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MicIcon from "@mui/icons-material/Mic";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { Seo } from "~/common/components";
import { PlayAudio, SearchInput } from "~/modules/dictionary/components";
import ListWords from "~/modules/dictionary/data/ListWords";
import { Word } from "~/modules/dictionary/models/Word";
import AppRoutes from "~/router/AppRoutes";

export default function LookupPage() {
  const [searchParams] = useSearchParams();
  const wordParam = searchParams.get("word");

  const currentWord: Word | undefined = ListWords.find((word) => word.word === wordParam);
  const relatedWords: Word[] = useMemo(
    () =>
      currentWord
        ? ListWords.filter(
            (word) => word.id !== currentWord.id && word.word.includes(currentWord.word)
          ).slice(0, 5)
        : [],
    [currentWord]
  );

  const handleDevelopFunction = () => {
    toast.info("Chức năng đang được phát triển vui lòng quay lại sau nha ^^");
  };

  if (wordParam === null || wordParam.trim() === "") {
    return <Navigate to={AppRoutes.dictionary} />;
  }

  return (
    <>
      <Seo
        data={{
          title: `Panda Hanyu | Nghĩa của từ '${wordParam}'`,
          description: `Panda Hanyu Nghĩa của từ '${wordParam}'`,
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.dictionary}/lookup?word=${wordParam}`,
          href: `${AppRoutes.dictionary}/lookup?word=${wordParam}`,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Container maxWidth={false} sx={{ padding: "2rem 0" }}>
        <SearchInput initialValue={wordParam} />

        {currentWord ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <Stack direction="column" spacing={3}>
                <Box>
                  <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="0.5rem">
                    Kết quả
                  </Typography>
                  <Card
                    variant="outlined"
                    sx={{ borderRadius: "12px", padding: "16px", border: "1px solid #000" }}
                  >
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} alignItems="end">
                        <Typography variant="h5" color="red">
                          {currentWord.word}
                        </Typography>
                        <Typography variant="body1">【{currentWord.pinyins[0]}】</Typography>
                      </Stack>
                      <Typography variant="body1" fontWeight={600}>
                        {currentWord.definitions[0].meaning}
                      </Typography>
                    </Stack>
                  </Card>
                </Box>
                <>
                  <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="0.5rem">
                    Các từ gợi ý
                  </Typography>
                  {relatedWords.length > 0 ? (
                    relatedWords.map((word) => (
                      <Link
                        key={word.id}
                        underline="none"
                        component={RouterLink}
                        to={`${AppRoutes.dictionary}/lookup?word=${word.word}`}
                      >
                        <Card
                          variant="outlined"
                          sx={{
                            borderRadius: "12px",
                            padding: "16px",
                            "&:hover": {
                              border: "1px solid #000",
                            },
                          }}
                        >
                          <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="end">
                              <Typography variant="h5" color="red">
                                {word.word}
                              </Typography>
                              <Typography variant="body1">【{word.pinyins[0]}】</Typography>
                            </Stack>
                            <Typography variant="body1" fontWeight={600}>
                              {word.definitions[0].meaning}
                            </Typography>
                          </Stack>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <Typography variant="body1" color="#707070">
                      Không có từ gợi ý
                    </Typography>
                  )}
                </>
              </Stack>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="0.5rem">
                Chi tiết từ
              </Typography>
              <Paper variant="outlined" sx={{ padding: "1rem", borderRadius: "12px" }}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row" spacing={2} alignItems="end">
                    {/* Word */}
                    <Typography variant="h4" color="red" marginLeft="0.5rem">
                      {currentWord.word}
                    </Typography>

                    {/* Audio */}
                    <Stack direction="row" spacing={1} paddingBottom="0.3rem">
                      {currentWord.audios.map((audio, index) => (
                        <PlayAudio key={index} src={audio} isMale={index === 1} />
                      ))}
                    </Stack>
                  </Stack>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <MicIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#ccc",
                        },
                      }}
                      onClick={handleDevelopFunction}
                    />
                    <ReportProblemIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#ccc",
                        },
                      }}
                      onClick={handleDevelopFunction}
                    />
                    <BookmarkIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#ccc",
                        },
                      }}
                      onClick={handleDevelopFunction}
                    />
                  </Stack>
                </Stack>
                {/* Pinyin */}
                <Stack direction="row" marginTop="0.4rem">
                  {currentWord.pinyins.map((pinyin, index) => (
                    <Typography key={index} variant="body1">
                      【{pinyin}】
                    </Typography>
                  ))}
                </Stack>
                <Divider sx={{ margin: "1rem 0" }} />
                {/* Level */}
                <Typography variant="body1" margin="0.5rem 0" color="#436ab3">
                  <strong style={{ textDecoration: "underline", color: "#707070" }}>Cấp độ:</strong>{" "}
                  {currentWord.level}
                </Typography>
                <Typography variant="body1" margin="0.5rem 0">
                  <strong style={{ textDecoration: "underline", color: "#707070" }}>
                    Từ loại:
                  </strong>{" "}
                  {currentWord.wordType}
                </Typography>
                {/* Definitions */}
                {currentWord.definitions.map((definition, index) => (
                  <Stack direction="row" spacing={1} key={definition.id} margin="2rem 0">
                    <Typography variant="body1" fontWeight="600" color="#707070">
                      {index + 1})
                    </Typography>
                    <Stack direction="column" spacing={1}>
                      <Typography variant="body1" fontWeight="600">
                        {definition.meaning}
                      </Typography>
                      <Typography variant="body1">{definition.meanExplan}</Typography>
                      <Typography
                        variant="body1"
                        margin="0.5rem 0"
                        fontWeight={600}
                        sx={{ textDecoration: "underline" }}
                        color="#707070"
                      >
                        Ví dụ:
                      </Typography>
                      <Stack spacing={3}>
                        {definition.examples.map((example) => (
                          <Stack direction="row" spacing={2} key={example.id}>
                            <Stack spacing={2}>
                              {example.audios.map((audio, index) => (
                                <PlayAudio key={index} src={audio} isMale={index === 1} />
                              ))}
                            </Stack>
                            <Stack direction="column" spacing={1}>
                              <Typography variant="body1">{example.word}</Typography>
                              <Typography variant="body1" fontWeight="bold">
                                {example.pinyin}
                              </Typography>
                              <Typography variant="body1" fontWeight="bold">
                                {example.meaning}
                              </Typography>
                            </Stack>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                ))}
              </Paper>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="0.5rem">
                Hán tự
              </Typography>
              {currentWord.kanjis.map((kanji, index) => (
                <Accordion key={kanji.id} defaultExpanded={index === 0} variant="outlined">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5" color="#436AB3">
                      {kanji.character}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        width: "60%",
                        padding: "0 10%",
                        margin: "0 auto",
                      }}
                    >
                      <img src={kanji.animation} alt="Your SVG" />
                    </Box>

                    <Stack direction="row" spacing={1} margin="0.1rem 0">
                      <Typography variant="body1" fontWeight="600">
                        Bính âm:
                      </Typography>
                      <Typography variant="body1">{kanji.pinyin}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} margin="0.1rem 0">
                      <Typography variant="body1" fontWeight="600">
                        Bộ:
                      </Typography>
                      <Typography variant="body1">{kanji.set}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} margin="0.1rem 0">
                      <Typography variant="body1" fontWeight="600">
                        Lục thư:
                      </Typography>
                      <Typography variant="body1">{kanji.record}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} margin="0.1rem 0">
                      <Typography variant="body1" fontWeight="600">
                        Số nét:
                      </Typography>
                      <Typography variant="body1">{kanji.noOfStrokes}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} margin="0.1rem 0">
                      <Typography variant="body1" fontWeight="600">
                        Nét bút:
                      </Typography>
                      <Typography variant="body1">{kanji.penStroke}</Typography>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Typography variant="h5">
                Không tìm thấy kết quả nào cho từ <strong>{wordParam}</strong>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
}
