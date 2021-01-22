import { makeStyles, Container, Grid } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import React from "react";
import { MyButton } from "./Buttons";
import { GridBox } from "./GridBox";

interface HeroSectionProps {
  img: FluidObject;
  variant?: "homepage" | "regular";
  noButtons?: boolean;
  buttons?: JSX.Element;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",

    padding: "50px 0",
  },

  background: {
    backgroundColor: theme.palette.neutral.light,
    position: "absolute",
    left: ({ variant }: any) => (variant === "homepage" ? 0 : "auto"),
    right: ({ variant }: any) => (variant === "regular" ? 0 : "auto"),
    top: 0,
    width: "80%",
    zIndex: -1,
    height: "100%",
    [theme.breakpoints.up("lg")]: {
      maxHeight: "650px",
    },

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  gridContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center",
    },
  },
  hidden: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },

  textContainer: {
    maxWidth: "600px",
    [theme.breakpoints.only("xl")]: {
      marginTop: "-4rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    "& h1": {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    "& p": {
      maxWidth: "500px",
    },
  },

  buttons: {
    marginTop: theme.spacing(3),
    "& a": {
      marginRight: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xs")]: {
      "& a": {
        display: "block",
      },
      "& a:not(:first-of-type)": {
        marginTop: theme.spacing(1),
      },
    },
  },

  image: {
    boxShadow: ({ variant }: any) =>
      variant === "regular"
        ? "20px 20px 4px 2px rgba(0, 0, 0, 0.05)"
        : "-20px 20px 4px 2px rgba(0, 0, 0, 0.05)",
  },
}));

const HeroSection: React.FC<HeroSectionProps> = ({
  img,
  children,
  noButtons,
  buttons,
  variant = "regular",
}) => {
  const classes = useStyles({ variant });
  return (
    <section className={classes.root}>
      <div className={classes.background} />
      <Container maxWidth="xl">
        <GridBox p={1}>
          <Grid
            container
            spacing={5}
            direction={variant === "homepage" ? "row" : "row-reverse"}
            className={classes.gridContainer}
          >
            <Grid item xs className={classes.hidden} />
            <Grid
              item
              lg={5}
              md={6}
              sm={9}
              xs={12}
              className={classes.textContainer}
            >
              {children}

              {noButtons ? null : (
                <div className={classes.buttons}>{buttons}</div>
              )}
            </Grid>

            <Grid item md={6} sm={10} xs={12}>
              {img ? (
                <Img
                  className={classes.image}
                  fluid={{
                    ...img,
                    aspectRatio: 4 / 3,
                  }}
                />
              ) : null}
            </Grid>
          </Grid>
        </GridBox>
      </Container>
    </section>
  );
};

export default HeroSection;
