import { useState } from "react";
import { useNavigate } from "react-router-dom";

import RestoreIcon from "@mui/icons-material/Restore";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import AppRoutes from "~/router/AppRoutes";
import { HistoryModal } from ".";
import { Test, TestResult } from "../models";

type TestResultCardProps = {
  test: Test;
  examSlug: string;
  testResults: TestResult[];
};

const TestResultCard = ({ test, testResults, examSlug }: TestResultCardProps) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const latestTestResult = testResults[0];

  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card variant="outlined" sx={{ borderRadius: "1rem", padding: "1.5rem" }}>
        <Typography variant="body1" textAlign="center" component="div">
          Đề số {test.no}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginY={"0.5rem"}
        >
          <Typography variant="body1" textAlign="center" component="div" fontSize={14}>
            {latestTestResult.realScore}/{latestTestResult.totalScore}
          </Typography>

          <RestoreIcon
            sx={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => setOpenHistory(true)}
          />
        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography
            variant="body1"
            textAlign="center"
            component="div"
            color="#53dc76"
            fontSize={14}
          >
            Hoàn thành
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            component="div"
            fontSize={14}
            fontWeight="bold"
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Thi lại
          </Typography>
        </Stack>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ paddingTop: "2.5rem" }}>
          <DialogContentText>Bạn có chắc là muốn làm lại bài thi này không?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose} autoFocus>
            Hủy Bỏ
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              navigate(`${AppRoutes.test}/${examSlug}/${test.slug}`);
            }}
          >
            Đồng Ý
          </Button>
        </DialogActions>
      </Dialog>
      <HistoryModal
        open={openHistory}
        setOpen={setOpenHistory}
        testResults={testResults}
        examSlug={examSlug}
      />
    </Grid>
  );
};

export default TestResultCard;
