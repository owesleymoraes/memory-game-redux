import React from "react";
import * as Styled from "./styles";

interface BoardProps {
  children: React.ReactNode;
}

export const Board: React.FC<BoardProps> = ({ children }) => {
  return <Styled.ContainerBoard>{children}</Styled.ContainerBoard>;
};
