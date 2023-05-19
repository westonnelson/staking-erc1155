import React from 'react';
import { ThirdwebProvider, useContract Web3Button} from "@thirdweb-dev/react";

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

  return (
    <div>
      <div>Contract Name: {contract?.name}</div>
      <Home contract={contract} />
    </div>
  );
}

const Home = ({ contract }) => {
  return (
    <Web3Button
      contractAddress={contract.address}
      action={async () => contract.call("myFunctionName")}
    >
      Call myFunctionName from the connected wallet
    </Web3Button>
  );
};

export default App;