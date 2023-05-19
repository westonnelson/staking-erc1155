import React from 'react';
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider activeChain="arbitrum">
      <Component />
    </ThirdwebProvider>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0x61254522b37F9dd11e8a6C9c2c3fa39Be25Fb788");

  // Assuming you want to render something in the component
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Assuming contract has a `name` property
  return <div>Contract Name: {contract?.name}</div>;
}

export default App;
