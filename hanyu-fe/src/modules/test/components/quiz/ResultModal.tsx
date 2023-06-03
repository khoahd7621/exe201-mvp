import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  LinearProgressProps,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import AppRoutes from "~/router/AppRoutes";
import { TestResult } from "../../models";

type Props = {
  examType: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  testResult: TestResult;
};

export default function ResultModal({ examType, open, setOpen, testResult }: Props) {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate(`${AppRoutes.test}/${examType}`);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" color="green">
        {"Kết quả"}
      </DialogTitle>
      <DialogContent>
        <TableContainer component={Paper} variant="outlined">
          <Table sx={{ width: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", paddingY: "8px" }}>Thời gian thi</TableCell>
                <TableCell sx={{ fontWeight: "bold", paddingY: "8px" }}>Điểm</TableCell>
                <TableCell sx={{ fontWeight: "bold", paddingY: "8px" }}>Tác vụ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{testResult.createdAt.toLocaleString()}</TableCell>
                <TableCell>
                  {testResult.realScore}/{testResult.totalScore}
                </TableCell>
                <TableCell>
                  <Link href="#" underline="hover">
                    Xem kết quả
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DialogContentText fontWeight="bold" marginTop={3}>
          Kết quả từng phần:
        </DialogContentText>
        {testResult.partResults.map((partResult) => (
          <LinearProgressWithLabel
            key={partResult.label}
            label={partResult.label}
            value={partResult.rate}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="info" onClick={handleClose} autoFocus>
          Quay về
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function LinearProgressWithLabel(props: LinearProgressProps & { label: string; value: number }) {
  return (
    <Stack direction="row" alignItems="center" gap={3} marginTop={1}>
      <Typography variant="body1" color="text.secondary">
        {props.label}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Typography variant="body2" color="text.secondary">{`${Math.round(
        props.value
      )}%`}</Typography>
    </Stack>
  );
}
