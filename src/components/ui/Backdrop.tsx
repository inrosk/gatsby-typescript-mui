import React from "react";
import { makeStyles } from "@material-ui/core";

interface BackdropProps {
  bg?: string;
  zIndex?: number;
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    background: (props: BackdropProps) => props.bg || "rgba(0, 0, 0, 0.15)",
    zIndex: (props: BackdropProps) => props.zIndex || -1,
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
}));

export const Backdrop: React.FC<BackdropProps> = (props) => {
  const classes = useStyles(props);

  return <div className={classes.backdrop} />;
};
