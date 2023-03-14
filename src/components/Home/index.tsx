import React from "react";
import { Dashboard } from "../Dashboard";
import { DashboardButton } from "../DashboardButton";
import { DashboardMenu } from "../DashboardMenu";

export const Home: React.FC = () => {
  return (
    <Dashboard>
      <DashboardMenu title="Jogo de Memória">
        <DashboardButton children="Iniciar Jogo" />
      </DashboardMenu>
    </Dashboard>
  );
};
