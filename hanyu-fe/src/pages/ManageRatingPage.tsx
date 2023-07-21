import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box, Button, Modal, TableHead, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/system";

import ratingApi from "~/modules/ratings/apis/ratingApi";
import { Rating } from "~/modules/ratings/models";
import { useAppSelector } from "~/redux/hooks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ManageRatingPage() {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);
  const [rows, setRows] = React.useState<Rating[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentRating, setCurrentRating] = React.useState<Rating | null>(null);
  const [sending, setSending] = React.useState(false);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    ratingApi
      .fetchAll()
      .then((res) => {
        const tmp = res.ratings.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setRows(tmp);
      })
      .catch((err) => console.log(err));
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteRating = (ratingId: string) => {
    setSending(true);
    ratingApi
      .delete(ratingId)
      .then(() => {
        fetchUsers();
        setCurrentRating(null);
        toast.success("Xóa đánh giá thành công");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Đã có lỗi xảy ra, vui lòng thử lại sau");
      })
      .finally(() => setSending(false));
  };

  const handleClose = () => {
    if (!sending) setCurrentRating(null);
  };

  if (!auth.isAuthenticated) {
    toast.error("Bạn cần đăng nhập để truy cập trang này");
    return <Navigate to="/login" replace={true} />;
  }

  if (profile.role !== "ADMIN") {
    toast.error("Bạn không có quyền truy cập trang này");
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Stack spacing={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Người dùng</StyledTableCell>
              <StyledTableCell>Số sao</StyledTableCell>
              <StyledTableCell>Đánh giá</StyledTableCell>
              <StyledTableCell>Ngày đánh giá</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  style={{
                    maxWidth: 130,
                  }}
                >
                  <Typography noWrap={true}>{row.id}</Typography>
                </TableCell>
                <TableCell>{row.userProfile.name}</TableCell>
                <TableCell>{row.star}</TableCell>
                <TableCell
                  style={{
                    maxWidth: 400,
                  }}
                >
                  {row.description}
                </TableCell>
                <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => setCurrentRating(row)}>
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={7} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {currentRating && (
        <Modal open={true} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2" fontWeight="bold" color="#090580">
              Xóa đánh giá
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Bạn đang thực hiện xóa đánh giá của tài khoản:{" "}
              <Typography component="span" fontWeight="bold">
                {currentRating.userProfile.name}
              </Typography>
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button
                disabled={sending}
                variant="contained"
                color="error"
                onClick={() => handleDeleteRating(currentRating.id)}
              >
                Đồng ý
              </Button>
              <Button
                disabled={sending}
                variant="contained"
                color="secondary"
                onClick={() => setCurrentRating(null)}
              >
                Hủy bỏ
              </Button>
            </Stack>
          </Box>
        </Modal>
      )}
    </Stack>
  );
}
