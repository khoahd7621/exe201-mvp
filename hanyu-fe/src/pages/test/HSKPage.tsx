import { useParams } from "react-router-dom";

import { Box, Container, Grid } from "@mui/material";

import { ListTests } from "~/modules/test/models/Test";

export default function HSKPage() {
  const { testType } = useParams();

  if (!ListTests.some((item) => item.slug === testType)) {
    return <div>Not found</div>;
  }

  return (
    <Container fixed>
      <Box>
        <Grid container spacing={2} paddingTop={4} paddingBottom={6}>
          <div>HSK Page - {testType}</div>
        </Grid>
      </Box>
    </Container>
  );
}
