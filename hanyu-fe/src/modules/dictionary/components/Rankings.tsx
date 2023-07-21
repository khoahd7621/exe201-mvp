import { toast } from "react-toastify";

import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Avatar, Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";

export default function Rankings() {
  return (
    <Paper variant="outlined" sx={{ padding: "1rem", borderRadius: "12px" }}>
      <Typography variant="h6" fontWeight="600" fontSize={16} margin="0">
        Xếp hạng tương tác
      </Typography>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack direction="row" justifyContent="space-between">
        <Button
          variant="outlined"
          sx={{
            height: "30px",
            width: "30%",
            fontSize: "12px",
            "&:hover": {
              border: "1px solid #1976d2",
            },
          }}
          onClick={() =>
            toast.info("Chức năng đang được phát triển. Vui lòng quay lại sau nha ^^.")
          }
        >
          Ngày
        </Button>
        <Button
          variant="text"
          sx={{
            height: "30px",
            width: "30%",
            fontSize: "12px",
            "&:hover": {
              border: "1px solid #1976d2",
            },
          }}
          onClick={() =>
            toast.info("Chức năng đang được phát triển. Vui lòng quay lại sau nha ^^.")
          }
        >
          Tuần
        </Button>
        <Button
          variant="text"
          sx={{
            height: "30px",
            width: "30%",
            fontSize: "12px",
            "&:hover": {
              border: "1px solid #1976d2",
            },
          }}
          onClick={() =>
            toast.info("Chức năng đang được phát triển. Vui lòng quay lại sau nha ^^.")
          }
        >
          Tháng
        </Button>
      </Stack>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack spacing={2}>
        <Box>
          <Typography variant="body1" fontWeight={600} color="#436ab3" component="span">
            从事:
          </Typography>{" "}
          <Typography variant="body2" component="span">
            “普普通通的上班族”是指一般的白领劳动者，通常指在公司、机构或组织中从事基本职能的员工，例如文员、销售人员、行政人员、财务人员等。
            Tạm dịch: Thuật ngữ “普普通通的上班族” ám chỉ những lao động làm công việc nhân viên văn
            phòng phổ thông, thường làm việc trong các công ty, tổ chức hoặc cơ quan, tham gia/ đảm
            nhiệm/ thực hiện các chức năng công việc cơ bản như văn thư, bán hàng, hành chính, tài
            chính và các công việc tương tự.
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbUpOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbDownOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>T</Avatar>
            <Typography variant="body2" fontWeight={600} fontSize={12}>
              Panda Hanyu Admin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack spacing={2}>
        <Box>
          <Typography variant="body1" fontWeight={600} color="#436ab3" component="span">
            矫正:
          </Typography>{" "}
          <Typography variant="body2" component="span">
            戴上矫正牙套: gắn mắc cài
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbUpOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbDownOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>T</Avatar>
            <Typography variant="body2" fontWeight={600} fontSize={12}>
              Panda Hanyu Admin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack spacing={2}>
        <Box>
          <Typography variant="body1" fontWeight={600} color="#436ab3" component="span">
            属于:
          </Typography>{" "}
          <Typography variant="body2" component="span">
            黄沙,长沙属于越南。
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbUpOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbDownOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>T</Avatar>
            <Typography variant="body2" fontWeight={600} fontSize={12}>
              Panda Hanyu Admin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack spacing={2}>
        <Box>
          <Typography variant="body1" fontWeight={600} color="#436ab3" component="span">
            醒来:
          </Typography>{" "}
          <Typography variant="body2" component="span">
            醒来：mở mắt nhưng vẫn còn ở trên giường, 起床：đã rời khỏi giường.
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbUpOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbDownOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>T</Avatar>
            <Typography variant="body2" fontWeight={600} fontSize={12}>
              Panda Hanyu Admin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ margin: "16px 0" }} />
      <Stack spacing={2}>
        <Box>
          <Typography variant="body1" fontWeight={600} color="#436ab3" component="span">
            阶层:
          </Typography>{" "}
          <Typography variant="body2" component="span">
            工薪阶层 (gōng xīn jiē céng): tầng lớp làm công ăn lương.
          </Typography>
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbUpOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <ThumbDownOffAltIcon
                sx={{
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body2" fontWeight={600} fontSize={12}>
                0
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar sx={{ width: 24, height: 24, fontSize: "12px" }}>T</Avatar>
            <Typography variant="body2" fontWeight={600} fontSize={12}>
              Panda Hanyu Admin
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
