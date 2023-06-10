import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Container, Grid, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <div
      style={{
        marginTop: "48px",
        backgroundColor: "#fff",
        boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          minHeight: "223px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" margin="15px" fontSize={20} fontWeight={600}>
              Thông tin
            </Typography>
            <Link href="#" underline="hover">
              <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
                Giới thiệu
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
                Chính sách
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
                Điều khoản
              </Typography>
            </Link>
            <Link href="#" underline="hover">
              <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
                Trợ giúp
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" margin="15px" fontSize={20} fontWeight={600}>
              Liên hệ
            </Typography>
            <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
            </Typography>
            <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
              (+84) 938 183 330
            </Typography>
            <Typography margin="15px" color="#363636" fontSize={14} fontWeight={600}>
              support.hanyu@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" margin="15px" fontSize={20} fontWeight={600}>
              Kết nối với chúng tôi
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2} margin="15px">
              <Link
                href="https://www.facebook.com/pandahanyu.page"
                rel="noopener noreferrer"
                target="_blank"
                underline="hover"
              >
                <FacebookOutlinedIcon
                  sx={{
                    fontSize: 45,
                  }}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@pandahanyu"
                rel="noopener noreferrer"
                target="_blank"
                underline="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 3333 3333"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  width={40}
                  height={40}
                  fill="#000"
                >
                  <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm361 744c31 262 177 418 430 434v294c-147 14-276-34-426-124v550c0 700-763 918-1069 417-197-322-76-889 556-911v311c-48 8-99 20-146 36-141 47-220 137-198 294 43 301 595 390 549-198V745h305z" />
                </svg>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant="h4" sx={{ margin: "15px", fontSize: 20, fontWeight: 600 }}>
              Khác
            </Typography>
            <Typography
              variant="h6"
              sx={{ margin: "15px", color: "#363636", fontSize: 14, fontWeight: 600 }}
            >
              © {new Date().getFullYear()} Hanyu. All right reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
