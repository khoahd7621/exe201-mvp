import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TableFeatures() {
  const listFeatures: string[] = [
    "Loại bỏ quảng cáo",
    "Đồng bộ sổ tay",
    "Ngữ pháp cao cấp",
    "Sổ tay chuyên ngành",
    "Không giới hạn bài thi HSK",
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "0.8rem",
        border: "none",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", paddingY: "8px" }}>
              Miễn phí
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold", paddingY: "8px" }}>
              Premium
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listFeatures.map((feature) => (
            <TableRow key={feature} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={{ fontWeight: "bold" }}>{feature}</TableCell>
              <TableCell align="center">
                <LockOutlinedIcon sx={{ color: "red" }} />
              </TableCell>
              <TableCell align="center">
                <CheckOutlinedIcon sx={{ color: "green" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
