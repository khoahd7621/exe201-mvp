import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";

import { TestCard } from "~/modules/test/components";
import { Test } from "~/modules/test/models";

import img1 from "~/assets/images/modules/test/banner/HSK_01.png";
import img2 from "~/assets/images/modules/test/banner/HSK_02.png";
import img3 from "~/assets/images/modules/test/banner/HSK_03.png";
import img4 from "~/assets/images/modules/test/banner/HSK_04.png";
import img5 from "~/assets/images/modules/test/banner/HSK_05.png";
import img6 from "~/assets/images/modules/test/banner/HSK_06.png";

export default function TestPage() {
  const listTests: Test[] = [
    {
      id: 1,
      name: "HSK 1",
      imageUrl: img1,
    },
    {
      id: 2,
      name: "HSK 2",
      imageUrl: img2,
    },
    {
      id: 3,
      name: "HSK 3",
      imageUrl: img3,
    },
    {
      id: 4,
      name: "HSK 4",
      imageUrl: img4,
    },
    {
      id: 5,
      name: "HSK 5",
      imageUrl: img5,
    },
    {
      id: 6,
      name: "HSK 6",
      imageUrl: img6,
    },
  ];
  return (
    <Container fixed>
      <Box>
        <Grid container spacing={2} paddingTop={4} paddingBottom={6}>
          <Grid item xs={12} md={8}>
            <Grid spacing={2} container>
              {listTests.map((item) => (
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
