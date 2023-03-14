import React from "react";
import * as Styled from "./styles";

interface DashboardProps {
  children: React.ReactNode;
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return <Styled.ContainerDashboard>{children}</Styled.ContainerDashboard>;
};
