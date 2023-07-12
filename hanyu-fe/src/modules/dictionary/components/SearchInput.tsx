import { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  CircularProgress,
  InputBase,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useDebounced } from "~/hooks/useDebounced";
import ListWords from "../data/ListWords";
import { Word } from "../models/Word";

type Props = {
  initialValue?: string;
};

export default function SearchInput({ initialValue }: Props) {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focusInput, setFocusInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Word[] | null>(null);
  const [value, setValue] = useState(initialValue || "");

  const keyword = useDebounced(value, 500);

  useEffect(() => {
    if (keyword?.trim()) {
      setLoading(true);
      fetchSuggestions(keyword);
      setLoading(false);
    } else {
      setSuggestions(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  function wait(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  const fetchSuggestions = async (keyword: string) => {
    const tmpWords = ListWords.filter((word) => word.word.includes(keyword));
    await wait(1000);
    setSuggestions(tmpWords);
  };

  const clearInput = () => {
    setSuggestions(null);
    setValue("");
    inputRef.current?.focus();
    setFocusInput(true);
  };

  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={5}
      position={"relative"}
    >
      <InputBase
        inputRef={inputRef}
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
        placeholder="Tra cứu"
        className={focusInput && suggestions !== null ? "has-result" : ""}
        sx={{
          padding: "0 120px 0 24px",
          backgroundColor: "#fff",
          height: 50,
          borderRadius: "24px",
          flexGrow: 1,
          fontWeight: 600,
          fontSize: "1rem",
          lineHeight: 50,
          border: "1px solid #ccc",
          "&:focus-within": {
            border: "1px solid #000",
          },
          "&.has-result": {
            borderBottomLeftRadius: 0,
          },
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box
        sx={{
          position: "absolute",
          right: "96px",
          display: suggestions !== null ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9998,
        }}
      >
        <HighlightOffIcon
          sx={{
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          onMouseDown={() => clearInput()}
        />
      </Box>
      <CircularProgress
        size="1rem"
        sx={{
          display: focusInput && loading ? "block" : "none",
          position: "absolute",
          right: "96px",
        }}
      />
      <Button
        className={focusInput && suggestions !== null ? "has-result" : ""}
        sx={{
          position: "absolute",
          backgroundColor: "#000",
          right: 0,
          color: "#fff",
          width: 80,
          height: 50,
          borderRadius: "0 24px 24px 0",
          "&:hover": {
            backgroundColor: "#363636",
          },
          "&.has-result": {
            borderBottomRightRadius: 0,
          },
        }}
      >
        <SearchIcon />
      </Button>
      <Paper
        className="suggest-result"
        variant="elevation"
        sx={{
          display: focusInput && suggestions !== null ? "block" : "none",
          position: "absolute",
          top: "100%",
          width: "100%",
          borderRadius: "0 0 24px 24px",
          overflow: "hidden",
          zIndex: 9998,
        }}
      >
        {suggestions &&
          suggestions.length > 0 &&
          suggestions.map((word) => (
            <Link
              key={word.id}
              underline="none"
              sx={{
                display: "block",
                "& + &": {
                  borderTop: "1px solid #ccc",
                },
              }}
              component={RouterLink}
              to={`/dictionary/lookup?word=${word.word}`}
              onMouseDown={() => {
                navigate(`/dictionary/lookup?word=${word.word}`);
              }}
            >
              <Stack
                direction="row"
                padding={"10px 24px"}
                gap={1}
                sx={{
                  color: "#000",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {word.word}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  【{word.pinyins[0]}】
                </Typography>
                <Typography
                  variant="body1"
                  noWrap
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  {word.definitions.reduce((acc, cur) => {
                    return acc + cur.meaning + "; ";
                  }, "")}
                </Typography>
              </Stack>
            </Link>
          ))}
        {suggestions && suggestions.length === 0 && (
          <Stack direction="row" padding={"10px 24px"} gap={1}>
            <Typography variant="body1">Không tìm thấy kết quả</Typography>
          </Stack>
        )}
      </Paper>
    </Stack>
  );
}
