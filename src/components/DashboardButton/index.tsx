import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

interface ButtonProps {
  children: string;
}

export const DashboardButton: React.FC<ButtonProps> = ({ children }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game");
  };
  return (
    <Styled.ContainerButton onClick={handleClick}>
      {children}
    </Styled.ContainerButton>
  );
};
