import { Dialog, DialogContent, DialogTitle, Stack } from "@mui/material";

import { TestResult } from "../models";
import HistoryCard from "./HistoryCard";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  testResults: TestResult[];
  examSlug: string;
};

export default function HistoryModal({ open, setOpen, testResults, examSlug }: Props) {
  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Lịch sử thi của bạn</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          {testResults.map((testResult) => (
            <HistoryCard key={testResult.id} testResult={testResult} examSlug={examSlug} />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
