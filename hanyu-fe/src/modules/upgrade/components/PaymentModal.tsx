import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Button, Divider, Link, Modal, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PaymentModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 500,
          p: 2,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Hướng dẫn thanh toán
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography fontWeight="bold" textTransform="uppercase" sx={{ mb: 1 }}>
            Ngân hàng
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <Button variant="contained" color="error">
              Vietcombank
            </Button>
            <Button variant="outlined" color="error">
              VPBank
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Chủ tài khoản
          </Typography>

          <Typography fontWeight="bold" fontSize={14}>
            Hoàng Đăng Khoa
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Số tài khoản
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <ContentCopyIcon
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#f44336",
                },
              }}
            />
            <Typography fontWeight="bold" fontSize={14}>
              12510000953635
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Chi nhánh
          </Typography>

          <Typography fontWeight="bold" fontSize={14}>
            Việt Nam
          </Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography fontWeight="bold" textTransform="uppercase" sx={{ mb: 1 }}>
            Chọn gói
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <Button variant="contained" color="error">
              3 tháng
            </Button>
            <Button variant="outlined" color="error">
              1 năm
            </Button>
            <Button variant="outlined" color="error">
              Vĩnh viễn
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Số tiền cần chuyển
          </Typography>

          <Typography fontWeight="bold" fontSize={14}>
            399.000 đ
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Nội dung chuyển khoản
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <ContentCopyIcon
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "#f44336",
                },
              }}
            />
            <Typography fontWeight="bold" fontSize={14}>
              PHY_SUB3_123456
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography fontWeight="bold" textTransform="uppercase" sx={{ mb: 1 }}>
          Thao tác
        </Typography>
        <Typography fontWeight="bold" fontSize={14}>
          B1: Chọn ngân hàng
        </Typography>
        <Typography fontWeight="bold" fontSize={14}>
          B2: Sao chép số tài khoản
        </Typography>
        <Typography fontWeight="bold" fontSize={14}>
          B3: Nhập số tiền cần chuyển
        </Typography>
        <Typography fontWeight="bold" fontSize={14}>
          B4: Sao chép nội dung chuyển khoản
        </Typography>
        <Typography fontWeight="bold" fontSize={14}>
          B5: Thực hiện giao dịch
        </Typography>
        <Typography fontStyle="italic" fontSize={13} mt={2}>
          * Hệ thống sẽ kích hoạt tự động sau 5-10 phút
        </Typography>
        <Typography fontStyle="italic" fontSize={13}>
          * Bạn cần đăng nhập lại tài khoản để đồng bộ Premium
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography fontWeight="bold" textTransform="uppercase" sx={{ mb: 1 }}>
          Hỗ trợ
        </Typography>
        <Typography fontWeight="bold" fontSize={14}>
          Nếu bạn có câu hỏi gì cần giải đáp hoặc gặp sự cố trong quá trình thanh toán cần hỗ trợ,
          bạn vui lòng liên hệ:
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <Link href="tel:+84938183330">
            <Button variant="contained" color="secondary">
              (+84) 938 183 330
            </Button>
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100092420516497"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant="contained" sx={{ gap: "6px" }}>
              <FacebookOutlinedIcon />
              Panda Hanyu
            </Button>
          </Link>
        </Stack>
        <Divider sx={{ mt: 2 }} />
      </Paper>
    </Modal>
  );
}
