import React from "react";
import * as Styled from "./styles";

interface ButtonProps {
  children: string;
}

export const DashboardButton: React.FC<ButtonProps> = ({ children }) => {
  return <Styled.ContainerButton>{children}</Styled.ContainerButton>;
};
