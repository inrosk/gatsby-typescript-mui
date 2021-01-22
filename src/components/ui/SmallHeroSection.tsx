import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { SectionLayout } from "./Section";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.neutral.light,
  },
}));

const SmallHeroSection: React.FC<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <SectionLayout justify="center" className={classes.root}>
      <Grid item md={7} xs={12}>
        {children}
      </Grid>
    </SectionLayout>
  );
};

export default SmallHeroSection;
