import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../siteLayout/layout";
import { SectionLayout } from "./Section";

interface SectionLoadingProps {}

const SectionLoading: React.FC<SectionLoadingProps> = ({}) => {
  return (
    <Layout>
      <SectionLayout justify="center" alignItems="center">
        <Grid item xs="auto">
          <CircularProgress />
        </Grid>
      </SectionLayout>
    </Layout>
  );
};

export default SectionLoading;
