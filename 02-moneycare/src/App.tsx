import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de React',
          type: 'deposit',
          category: 'development',
          amount: 6000,
          createdAt: new Date('2021-03-03 15:23:12')
        },
        {
          id: 2,
          title: 'Pizza',
          type: 'withdraw',
          category: 'food',
          amount: 60,
          createdAt: new Date('2021-03-04 15:23:12')
        }
      ],
    })
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  },
});

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}
