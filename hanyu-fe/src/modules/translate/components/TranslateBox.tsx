import { Box, IconButton, Stack, Typography, Tab, Tabs } from "@mui/material";
import SwapHorizontalCircleOutlinedIcon from "@mui/icons-material/SwapHorizontalCircleOutlined";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import HistoryIcon from "@mui/icons-material/History";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import MicIcon from "@mui/icons-material/Mic";
import { styled } from "@mui/system";
import TranslateIcon from "@mui/icons-material/Translate";
import { useEffect, useState } from "react";

const StyledTextarea = styled(TextareaAutosize)(
  () => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border: 0;
  min-width: 42rem;
  min-height: 10.5rem;
  resize: none; 

  &:hover {
    border: 0,
  }

  &:focus {
    border: 0,
  }

  &:focus-visible {
    outline: 0;
  }
`
);

const TranslateBox = () => {
  const [resultTranslate, setResultTranslate] = useState("");
  const [value, setValue] = useState("Chinese (Simplified)");
  const [valueOutput, setValueOutput] = useState("English");
  const [sourceText, setSourceText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChangeTabOutput = (_event: React.SyntheticEvent, newValue: string) => {
    setValueOutput(newValue);
  };

  const handleSwap = () => {
    const temp: string = valueOutput;
    setValueOutput(value);
    setValue(temp);
  };

  useEffect(() => {
    const handleTranslate = async () => {
      setWordCount(sourceText.length);
      let sourceLang = "en";
      let targetLang = "zh_cn";

      if (value == "Chinese (Simplified)") {
        sourceLang = "zh-cn";
      }
      if (value == "Chinese (Traditional)") {
        sourceLang = "zh_HANT";
      }
      if (value == "Vietnamese") {
        sourceLang = "vi-VN";
      }
      if (value == "English") {
        sourceLang = "en";
      }

      if (valueOutput == "Chinese (Simplified)") {
        targetLang = "zh-cn";
      }
      if (valueOutput == "Chinese (Traditional)") {
        targetLang = "zh_HANT";
      }
      if (valueOutput == "Vietnamese") {
        targetLang = "vi-VN";
      }
      if (valueOutput == "English") {
        targetLang = "en";
      }

      try {
        const url =
          "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
          sourceLang +
          "&tl=" +
          targetLang +
          "&dt=t&q=" +
          encodeURI(sourceText);
        const response = await fetch(url);
        const responseJson = await response.json();
        setResultTranslate(responseJson[0][0][0]);
      } catch (error) {
        setResultTranslate("");
      }
    };
    handleTranslate();
  }, [value, valueOutput, sourceText]);
  return (
    <Stack direction="row" display="flex" alignItems="center" justifyContent="center">
      <Box
        sx={{
          background: "#fff",
          width: "85rem",
          height: "19rem",
          borderRadius: 2,
          border: 1,
          borderColor: "#ccc",
        }}
      >
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderBottom: 1, borderBottomColor: "#ccc" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mr: "4rem",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChangeTab}
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#000",
                },
                fontSize: "14px",
                color: "#ccc",
                fontWeight: 700,
              }}
            >
              <Tab
                label="Trung (Giản thể)"
                value="Chinese (Simplified)"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
              <Tab
                label="Trung (Phồn thể)"
                value="Chinese (Traditional)"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
              <Tab
                label="Tiếng Việt"
                value="Vietnamese"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
              <Tab
                label="Tiếng Anh"
                value="English"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
            </Tabs>
          </Box>
          <IconButton onClick={handleSwap}>
            <SwapHorizontalCircleOutlinedIcon
              sx={{ color: "#ccc", fontSize: "42px", cursor: "pointer" }}
            />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              ml: "4rem",
            }}
          >
            <Tabs
              value={valueOutput}
              onChange={handleChangeTabOutput}
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "#000",
                },
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              <Tab
                label="Trung (Giản thể)"
                value="Chinese (Simplified)"
                sx={{
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
              <Tab
                label="Trung (Phồn thể)"
                value="Chinese (Traditional)"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
              <Tab
                label="Tiếng Việt"
                value="Vietnamese"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
              <Tab
                label="Tiếng Anh"
                value="English"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                  },
                  "&:focus": {
                    color: "#000",
                  },
                }}
              />
            </Tabs>
          </Box>
        </Stack>
        <Stack display="flex" direction="row" justifyContent="center">
          <Box sx={{ borderRight: 1, borderRightColor: "#ccc" }}>
            <StyledTextarea onChange={(e) => setSourceText(e.target.value)} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#363636",
                mb: 1,
                fontSize: "14px",
              }}
            >
              <Box>
                <IconButton
                  sx={{
                    "&:hover": {
                      background: "transparent",
                      color: "#000",
                    },
                    "&:focus": {
                      color: "#000",
                    },
                  }}
                >
                  <VolumeUpIcon />
                </IconButton>
                <IconButton
                  sx={{
                    "&:hover": {
                      background: "transparent",
                      color: "#000",
                    },
                    "&:focus": {
                      color: "#000",
                    },
                  }}
                >
                  <HistoryIcon />
                </IconButton>
                <IconButton
                  sx={{
                    "&:hover": {
                      background: "transparent",
                      color: "#000",
                    },
                    "&:focus": {
                      color: "#000",
                    },
                  }}
                >
                  <DriveFolderUploadIcon />
                </IconButton>
                <IconButton
                  sx={{
                    "&:hover": {
                      background: "transparent",
                      color: "#000",
                    },
                    "&:focus": {
                      color: "#000",
                    },
                  }}
                >
                  <MicIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mr: 1,
                  mb: 1,
                }}
              >
                <Box sx={{ mr: 2, fontSize: "16px", fontWeight: 700, color: "#9a9a9a" }}>
                  {wordCount}/600
                </Box>
                <Box
                  sx={{
                    background: "#292929",
                    width: "7rem",
                    height: "2rem",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    "&:hover": {
                      cursor: "pointer",
                      background: "#363636",
                    },
                  }}
                >
                  <TranslateIcon sx={{ fontSize: "20px", fontWeight: 700 }} />
                  <Typography variant="body2" fontSize="14px" fontWeight="700">
                    Translate
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ minWidth: "42rem", minHeight: "10.5rem" }}>
            <StyledTextarea value={resultTranslate != null ? resultTranslate : ""} />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TranslateBox;
