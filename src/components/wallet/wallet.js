import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

const Wallet = () => {
  const balance = useAppSelector((state) => state.balance.balance);

  return (
    <div data-testid="wallet-component">
      <h3 data-testid="balance-text">Wallet balance:{balance}</h3>
    </div>
  );
};

export default Wallet;
