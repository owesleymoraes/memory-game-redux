import React from "react";
import { Dashboard } from "../Dashboard";
import { DashboardButton } from "../DashboardButton";
import { DashboardMenu } from "../DashboardMenu";

export const Home: React.FC = () => {
  return (
    <Dashboard>
      <DashboardMenu title="jogo da Memória">
        <DashboardButton children="Iniciar Jogo" />
      </DashboardMenu>
    </Dashboard>
  );
};
