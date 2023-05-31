import { Container } from "@mui/material";
import { TranslateBox } from "~/modules/translate/components";

export default function TranslatePage() {
  return (
    <Container maxWidth={false} sx={{ margin: "2rem 0" }}>
      <TranslateBox />
    </Container>
  );
}
