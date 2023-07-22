import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box, Button, Modal, Rating, TableHead, TextField, Typography } from "@mui/material";
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

import { Seo } from "~/common/components";
import { useDebounced } from "~/hooks/useDebounced";
import ratingApi from "~/modules/ratings/apis/ratingApi";
import { Rating as RatingMD } from "~/modules/ratings/models";
import { useAppSelector } from "~/redux/hooks";
import AppRoutes from "~/router/AppRoutes";

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

type Props = {
  setKeyword: (keyword: string) => void;
};

const TextInput = ({ setKeyword }: Props) => {
  const [input, setInput] = React.useState("");

  const debouncedValue = useDebounced(input, 500);

  React.useEffect(() => {
    setKeyword(debouncedValue || "");
  }, [debouncedValue, setKeyword]);

  return (
    <TextField label="Tìm kiếm" variant="standard" onChange={(e) => setInput(e.target.value)} />
  );
};

export default function ManageRatingPage() {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);
  const [rows, setRows] = React.useState<RatingMD[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentRating, setCurrentRating] = React.useState<RatingMD | null>(null);
  const [sending, setSending] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [filterRows, setFilterRows] = React.useState<RatingMD[]>([]);

  React.useEffect(() => {
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      // search star follows format &star=1
      if (lowerKeyword.includes("&star=")) {
        const tmp = rows.filter((row) => row.star.toString().includes(lowerKeyword.split("=")[1]));
        setFilterRows(tmp);
      } else {
        const tmp = rows.filter(
          (row) =>
            row.id.includes(lowerKeyword) ||
            row.userProfile.name.toLowerCase().includes(lowerKeyword)
        );
        setFilterRows(tmp);
      }
    } else {
      setFilterRows(rows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

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
        setFilterRows(tmp);
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
    <>
      <Seo
        data={{
          title: "Panda Hanyu | Quản lý - Đánh giá",
          description: "Panda Hanyu quản lý - Trang quản lý đánh giá",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.manage}/ratings`,
          href: `${AppRoutes.manage}/ratings`,
          thumbnailUrl:
            "https://res.cloudinary.com/khoahd7621/image/upload/v1686117832/banner-2_fkf4w3.png",
        }}
      />

      <Stack spacing={3}>
        <TextInput setKeyword={setKeyword} />

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
              {filterRows.length > 0 ? (
                filterRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell
                        style={{
                          maxWidth: 130,
                        }}
                      >
                        <Typography noWrap={true}>{row.id}</Typography>
                      </TableCell>
                      <TableCell>{row.userProfile.name}</TableCell>
                      <TableCell>
                        <Rating value={row.star} readOnly />
                      </TableCell>
                      <TableCell
                        style={{
                          maxWidth: 400,
                        }}
                      >
                        {row.description}
                      </TableCell>
                      <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => setCurrentRating(row)}
                        >
                          Xóa
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow style={{ height: 53 }}>
                  <TableCell colSpan={6}>
                    <Typography variant="body2" component="h2" fontWeight="bold" color="#090580">
                      Không có dữ liệu
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  count={filterRows.length}
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
    </>
  );
}
