import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

import { TestCard } from "~/modules/test/components";
import { ListTests } from "~/modules/test/models/Test";

export default function TestPage() {
  return (
    <Container fixed>
      <Box>
        <Grid container spacing={2} paddingTop={4} paddingBottom={6}>
          <Grid item xs={12} md={8}>
            <Grid spacing={2} container>
              {ListTests.map((item) => (
                <TestCard key={item.id} test={item} />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ borderRadius: "1rem" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Kỳ thi kiểm tra trình độ Hán ngữ
                </Typography>
                <Typography sx={{ my: 1.5 }}>
                  Kỳ thi năng lực Hán Ngữ (tiếng Trung: 汉语水平考试; Hán-Việt: Hán Ngữ thủy bình
                  khảo thí; bính âm: Hànyǔ Shuǐpíng Kǎoshì), viết tắt là HSK, là một bài thi tiêu
                  chuẩn duy nhất đánh giá trình độ tiếng Trung Quốc dành cho người nước ngoài mà
                  không sử dụng tiếng Trung là ngôn ngữ mẹ đẻ hoặc dành cho người Trung Quốc sinh
                  sống ở nước ngoài.
                </Typography>
                <Typography>
                  Các kỳ thi được quản lý bởi Hanban, một cơ quan thuộc Bộ Giáo dục nước Cộng hòa
                  Nhân dân Trung Hoa.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
