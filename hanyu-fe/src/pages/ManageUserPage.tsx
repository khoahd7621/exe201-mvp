import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box, Button, Chip, Modal, TableHead, TextField, Typography } from "@mui/material";
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
import manageApis from "~/modules/manage/apis/ManageApis";
import { User } from "~/modules/manage/models";
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

export default function ManageUserPage() {
  const auth = useAppSelector((state) => state.auth);
  const profile = useAppSelector((state) => state.profile.user);
  const [rows, setRows] = React.useState<User[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  const [sending, setSending] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  const [filterRows, setFilterRows] = React.useState<User[]>([]);

  React.useEffect(() => {
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      const tmp = rows.filter(
        (row) =>
          row.id.includes(lowerKeyword) ||
          row.name.toLowerCase().includes(lowerKeyword) ||
          row.email.toLowerCase().includes(lowerKeyword) ||
          row.usePackage.toLowerCase().includes(lowerKeyword)
      );
      setFilterRows(tmp);
    } else {
      setFilterRows(rows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    manageApis
      .getUsers(200, 1)
      .then((res) => {
        const tmpUsers = res.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setRows(Array.from(tmpUsers));
        setFilterRows(Array.from(tmpUsers));
      })
      .catch((err) => console.error(err));
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

  const handleSubmitExpandSubscription = (userId: string, pack: string) => {
    setSending(true);
    manageApis
      .expandSubcription(userId, pack)
      .then(() => {
        fetchUsers();
        setCurrentUser(null);
        toast.success("Gia hạn gói thành công");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Đã có lỗi xảy ra, vui lòng thử lại sau");
      })
      .finally(() => setSending(false));
  };

  const handleClose = () => {
    if (!sending) setCurrentUser(null);
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
          title: "Panda Hanyu | Quản lý - Người dùng",
          description: "Panda Hanyu quản lý - Trang quản lý người dùng",
          url: `https://hanyu-chinesee-learning.vercel.app/${AppRoutes.manage}/users`,
          href: `${AppRoutes.manage}/users`,
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
                <StyledTableCell>Tên</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Loại tài khoản</StyledTableCell>
                <StyledTableCell>Gói</StyledTableCell>
                <StyledTableCell>Ngày hết hạn</StyledTableCell>
                <StyledTableCell>Ngày tham gia</StyledTableCell>
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
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        {row.usePackage === "PREMIUM" ? (
                          <Chip label={row.usePackage} color="warning" />
                        ) : (
                          <Chip label={row.usePackage} color="secondary" variant="outlined" />
                        )}
                      </TableCell>
                      <TableCell>
                        {row.packageTime === "QUARTER" ? (
                          <Chip
                            label="3 tháng"
                            sx={{
                              backgroundColor: "#2B2730",
                              color: "#fff",
                            }}
                          />
                        ) : row.packageTime === "YEAR" ? (
                          <Chip
                            label="1 năm"
                            sx={{
                              backgroundColor: "#A0D8B3",
                            }}
                          />
                        ) : row.packageTime === "LIFETIME" ? (
                          <Chip
                            label="Vĩnh viễn"
                            sx={{
                              backgroundColor: "#FFD93D",
                            }}
                          />
                        ) : (
                          "N/a"
                        )}
                      </TableCell>
                      <TableCell>
                        {row.packageTime === "LIFETIME"
                          ? "Vô thời hạn"
                          : row.subscriptionExpiredDate
                          ? new Date(row.subscriptionExpiredDate).toLocaleString()
                          : "N/a"}
                      </TableCell>
                      <TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
                      <TableCell>
                        <Button variant="contained" onClick={() => setCurrentUser(row)}>
                          Gia hạn gói
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow style={{ height: 53 }}>
                  <TableCell colSpan={8}>
                    <Typography variant="body2" component="h2" fontWeight="bold" color="#090580">
                      Không tìm thấy kết quả
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
        {currentUser && (
          <Modal open={true} onClose={handleClose}>
            <Box sx={modalStyle}>
              <Typography variant="h6" component="h2" fontWeight="bold" color="#090580">
                Gia hạn gói dịch vụ
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Bạn đang thực hiện nâng cấp gói dịch vụ cho tài khoản:{" "}
                <Typography component="span" fontWeight="bold">
                  {currentUser.name}
                </Typography>{" "}
                với id là{" "}
                <Typography component="span" fontWeight="bold">
                  {currentUser.id}
                </Typography>{" "}
                và địa chỉ email là{" "}
                <Typography component="span" fontWeight="bold">
                  {currentUser.email}
                </Typography>
              </Typography>
              <Typography sx={{ mt: 2 }}>Kiểm tra kỹ thông tin và chọn gói bên dưới:</Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  disabled={sending}
                  variant="contained"
                  color="secondary"
                  onClick={() => handleSubmitExpandSubscription(currentUser.id, "QUARTER")}
                >
                  Gia hạn 3 tháng
                </Button>
                <Button
                  disabled={sending}
                  variant="contained"
                  color="info"
                  onClick={() => handleSubmitExpandSubscription(currentUser.id, "YEAR")}
                >
                  Gia hạn 1 năm
                </Button>
                <Button
                  disabled={sending}
                  variant="contained"
                  color="warning"
                  onClick={() => handleSubmitExpandSubscription(currentUser.id, "LIFETIME")}
                >
                  Gia hạn vĩnh viễn
                </Button>
              </Stack>
            </Box>
          </Modal>
        )}
      </Stack>
    </>
  );
}
