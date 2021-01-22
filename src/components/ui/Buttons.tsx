import { makeStyles, Button, CircularProgress } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

interface ButtonWithProgressProps {
  loading: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(0),
    position: "relative",
    textAlign: "center",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  myButton: {
    minWidth: "100px",
  },
}));

export const ButtonWithProgress: React.FC<ButtonWithProgressProps> = ({
  loading,
  fullWidth,
  type,
  className,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        type={type}
        fullWidth={fullWidth}
        variant="contained"
        color="primary"
        size="large"
        disableElevation
        disabled={loading}
        className={className}
      >
        {children}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

interface MyButtonProps {
  to?: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
}

export const MyButton: React.FC<MyButtonProps> = ({
  to,
  children,
  color = "primary",
  variant = "contained",
  ...props
}) => {
  const classes = useStyles();

  if (!to) {
    return (
      <Button
        variant={variant}
        color={color}
        size="large"
        disableElevation
        className={classes.myButton}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      component={Link}
      to={to}
      variant={variant}
      color={color}
      size="large"
      disableElevation
      className={classes.myButton}
      {...props}
    >
      {children}
    </Button>
  );
};
