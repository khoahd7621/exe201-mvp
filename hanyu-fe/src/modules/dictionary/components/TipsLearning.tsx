import { Box, Paper, Typography } from "@mui/material";

export default function TipsLearning() {
  return (
    <Box>
      <Typography variant="h6" fontWeight="600" fontSize={16} marginBottom="1rem">
        Tips học tập
      </Typography>
      <Paper variant="outlined" sx={{ padding: "1rem", borderRadius: "12px" }}>
        <Typography
          variant="body1"
          fontWeight="600"
          marginBottom={1}
          sx={{ textDecoration: "underline" }}
        >
          Chủ đề: HSK
        </Typography>
        <Typography variant="body2">
          HSK cấp độ 4 vẫn gồm có 3 phần thi là: Nghe, Đọc hiểu và Viết. Thời gian thi kéo dài trong
          90 phút. Phần nghe có 45 câu thi trong 30 phút. Phần đọc gồm 40 câu thi trong 35 phút.
          Cuối cùng là phần viết 15 câu trong 25 phút. Bạn vẫn sẽ có thêm 5 phút điền thông tin và
          10 phút để chép đáp án vào giấy trả lời. <br /> Thông thường khi đi du học Trung Quốc, nếu
          bạn đạt được HSK 4 thì sẽ được miễn thi đầu vào. Nếu có chứng chỉ HSK 4 loại ưu tú thì bạn
          sẽ có nhiều cơ hội để được nhận học bổng với giá trị lớn. <br /> Đạt được cấp độ này đồng
          nghĩa với việc bạn đã có thể giao tiếp tốt bằng tiếng Trung để có thể học tập, du lịch,
          làm việc với người Trung Quốc rồi. Để đạt được HSK cấp độ 4, bạn cần biết ít nhất 1200 từ
          tiếng Trung, trong đó có khoảng 600 từ là những từ không thông dụng.
        </Typography>
      </Paper>
    </Box>
  );
}
