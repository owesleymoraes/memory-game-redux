import React from "react";
import * as Styled from "./styles";

interface DashboardMenuProps {
  title: string;
  children: React.ReactNode;
}

export const DashboardMenu: React.FC<DashboardMenuProps> = ({
  children,
  title,
}) => {
  return (
    <Styled.ContainerDashboardMenu>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.ContainerDashboardMenu>
  );
};
