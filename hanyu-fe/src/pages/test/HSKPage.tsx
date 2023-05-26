import { Navigate, useParams } from "react-router-dom";

import { Box, Container, Grid } from "@mui/material";

import { TestStructure } from "~/modules/test/components";
import { ListTests, Test } from "~/modules/test/models/Test";
import AppRoutes from "~/router/AppRoutes";

export default function HSKPage() {
  const { testType } = useParams();

  const currentTest: Test | undefined = ListTests.find((item) => item.slug === testType);

  if (!currentTest) {
    return <Navigate to={AppRoutes.test} />;
  }

  return (
    <Container fixed>
      <Box>
        <Grid container spacing={2} paddingTop={4} paddingBottom={6}>
          <Grid item xs={12} md={3}>
            <TestStructure testName={currentTest.name} structure={currentTest.structure} />
          </Grid>
          <Grid item xs={12} md={9}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
