import React from "react";

import { Container } from "./styles";

type Props = {
  children: React.ReactNode;

  size?: number;
  bold?: boolean;
  color?: string;
};

export const Text = ({ children, color, size, bold }: Props) => {
  return (
    <Container color={color} size={size} bold={bold}>
      {" "}
      {children}
    </Container>
  );
};
