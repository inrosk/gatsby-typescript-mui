import React from "react";
import { GridSpacing, makeStyles } from "@material-ui/core";

interface GridBoxProps {
  p?: GridSpacing;
}

const useStyles = makeStyles((theme) => ({
  box: {
    padding: (p: GridSpacing) => theme.spacing(p),
  },
}));

export const GridBox: React.FC<GridBoxProps> = ({ p, children }) => {
  const classes = useStyles(p || 0);
  return <div className={classes.box}>{children}</div>;
};
