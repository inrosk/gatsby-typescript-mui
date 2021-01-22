import React from "react";

import {
  Container,
  Grid,
  GridJustification,
  GridSpacing,
  GridItemsAlignment,
  GridDirection,
} from "@material-ui/core";

import { GridBox } from "./GridBox";

interface SectionProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  justify?: GridJustification;
  alignItems?: GridItemsAlignment;
  spacing?: GridSpacing;
  direction?: GridDirection;
}

export const SectionLayout: React.FC<SectionProps> = ({
  children,
  spacing,
  justify,
  alignItems,
  direction,
  ...props
}) => {
  return (
    <section {...props}>
      <Container>
        <GridBox
          p={
            spacing
              ? (Math.floor(spacing / 2) as GridSpacing)
              : (Math.floor(5 / 2) as GridSpacing)
          }
        >
          <Grid
            container
            spacing={spacing || 5}
            justify={justify}
            alignItems={alignItems}
            direction={direction}
          >
            {children}
          </Grid>
        </GridBox>
      </Container>
    </section>
  );
};
