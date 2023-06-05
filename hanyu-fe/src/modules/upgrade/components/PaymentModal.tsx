import { useEffect, useState } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Box, Button, Divider, Link, Modal, Paper, Tooltip, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { useAppSelector } from "~/redux/hooks";
import { ListSubscriptions, Subscription } from "../models/Subscription";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Bank = {
  id: number;
  name: string;
  owner: string;
  number: string;
  branch: string;
};

type Subs = Subscription & {
  content: string;
};

export default function PaymentModal({ open, onClose }: Props) {
  const profile = useAppSelector((state) => state.profile.user);

  const listBanks: Bank[] = [
    {
      id: 1,
      name: "Vietcombank",
      owner: "Đoàn Lê Trúc Huỳnh",
      number: "12510000953635",
      branch: "Việt Nam",
    },
    {
      id: 2,
      name: "Momo",
      owner: "Đoàn Lê Trúc Huỳnh",
      number: "0792123456",
      branch: "Momo",
    },
  ];

  const listSubscriptions: Subs[] = ListSubscriptions.map((subscription, index) => ({
    ...subscription,
    content:
      index === 0
        ? `PHY_SUB3T_${profile.id.split("-")[0]}`
        : index === 1
        ? `PHY_SUB1N_${profile.id.split("-")[0]}`
        : `PHY_SUBLF_${profile.id.split("-")[0]}`,
  }));

  const [currentBank, setCurrentBank] = useState<Bank>(listBanks[0]);
  const [currentSubscription, setCurrentSubscription] = useState<Subs>(listSubscriptions[0]);
  const [isCopiedBankNumber, setIsCopiedBankNumber] = useState<boolean>(false);
  const [isCopiedContent, setIsCopiedContent] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => setIsCopiedBankNumber(false), 2000);

    return () => clearTimeout(id);
  }, [isCopiedBankNumber]);

  useEffect(() => {
    const id = setTimeout(() => setIsCopiedContent(false), 2000);

    return () => clearTimeout(id);
  }, [isCopiedContent]);

  const handleClickedCopy = (text: string, type: "BankNumber" | "Content") => {
    navigator.clipboard.writeText(text);
    if (type === "BankNumber") setIsCopiedBankNumber(true);
    else setIsCopiedContent(true);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: 600,
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hướng dẫn thanh toán
          </Typography>

          <ClearIcon sx={{ cursor: "pointer" }} onClick={onClose} />
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography fontWeight="bold" textTransform="uppercase" sx={{ mb: 1 }}>
            Ngân hàng
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            {listBanks.map((bank) => (
              <Button
                key={bank.id}
                variant={currentBank.id === bank.id ? "contained" : "outlined"}
                color="error"
                onClick={() => setCurrentBank(bank)}
              >
                {bank.name}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Chủ tài khoản
          </Typography>

          <Typography fontWeight="bold" fontSize={14}>
            {currentBank.owner}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Số tài khoản
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <Tooltip title={isCopiedBankNumber ? "Đã sao chép" : "Sao chép"}>
              <ContentCopyIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#f44336",
                  },
                }}
                onClick={() => handleClickedCopy(currentBank.number, "BankNumber")}
              />
            </Tooltip>
            <Typography fontWeight="bold" fontSize={14}>
              {currentBank.number}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Chi nhánh
          </Typography>

          <Typography fontWeight="bold" fontSize={14}>
            {currentBank.branch}
          </Typography>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography fontWeight="bold" textTransform="uppercase" sx={{ mb: 1 }}>
            Chọn gói
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            {listSubscriptions.map((subscription) => (
              <Button
                key={subscription.id}
                variant={currentSubscription.id === subscription.id ? "contained" : "outlined"}
                color="error"
                onClick={() => setCurrentSubscription(subscription)}
              >
                {subscription.name}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Số tiền cần chuyển
          </Typography>

          <Typography fontWeight="bold" fontSize={14}>
            {currentSubscription.price}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography fontWeight="bold" fontSize={14}>
            Nội dung chuyển khoản
          </Typography>

          <Stack direction="row" alignItems="center" gap={1}>
            <Tooltip title={isCopiedContent ? "Đã sao chép" : "Sao chép"}>
              <ContentCopyIcon
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#f44336",
                  },
                }}
                onClick={() => handleClickedCopy(currentSubscription.content, "Content")}
              />
            </Tooltip>
            <Typography fontWeight="bold" fontSize={14}>
              {currentSubscription.content}
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            maxHeight: {
              xs: "150px",
              sm: "100%",
            },
            overflowY: {
              xs: "scroll",
              sm: "hidden",
            },
          }}
        >
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
        </Box>
        <Divider sx={{ mt: 2 }} />
      </Paper>
    </Modal>
  );
}
