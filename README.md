# Token Donation on AAVE

## Introduction

In this guide, we will utilize the [**Token Drop**](https://portal.thirdweb.com/contracts/token-drop) contract to release ERC-20 tokens!

We also utilize the token drop's [donate phases](https://portal.thirdweb.com/pre-built-contracts/token-drop#setting-claim-phases) feature, to release the tokens for a price, and only allow a certain amount to be claimed per wallet.

**Check out the Demo here**: https://token-drop.thirdweb-example.com/

## Tools:

- [**thirdweb Token Drop**](https://portal.thirdweb.com/contracts/token-drop): thirdweb's Token Drop contract is a way of releasing your ERC20 tokens!

- [**thirdweb React SDK**](https://docs.thirdweb.com/react): To connect to our NFT Collection Smart contract via React hooks such as [useTokenDrop](https://docs.thirdweb.com/react/react.usetokendrop), connect user's wallets, and other awesome hooks like [useActiveClaimCondition](https://docs.thirdweb.com/react/react.useactiveclaimcondition) and [useClaimIneligibilityReasons](https://docs.thirdweb.com/react/react.useclaimineligibilityreasons).

- [**thirdweb TypeScript SDK**](https://docs.thirdweb.com/typescript): To donate/mint tokens from the token drop with [.claim](https://portal.thirdweb.com/pre-built-contracts/token-drop#claiming-tokens) , view token balance with [.balanceOf](https://portal.thirdweb.com/pre-built-contracts/token-drop#token-balance), and transfer tokens with [.transfer](https://portal.thirdweb.com/pre-built-contracts/token-drop#transfer-tokens).

## Using This Repo

- Create a Token Drop contract via the thirdweb dashboard on the optimism-goerli test network.

- Create a project using this example by running:

```bash
npx thirdweb create --template token-drop
```

- Replace our demo token drop contract address (`0xf1765d27B7040D1F879FB71f02a4E0b9258852ec`) with your token drop contract address!

# Guide

## Configuring the ThirdwebProvider

The thirdweb provider is a wrapper around our whole application.

It allows us to access all of the React SDK's helpful hooks anywhere in our application.

```jsx
// This is the chain your dApp will work on.
const activeChainId = "optimism-goerli";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
```

## Connecting User's Wallets

We use the [useMetamask](https://portal.thirdweb.com/react/react.usemetamask) hook to connect with user's wallets.

```jsx
const connectWithMetamask = useMetamask();

// ...
<button onClick={connectWithMetamask}>Connect with Metamask</button>;
```

## Getting the token drop contract

We use the [useContract](https://docs.thirdweb.com/react/react.useContract) hook to get the token drop contract:

```jsx
const { contract: tokenDropContract } = useContract(
  "0xf1765d27B7040D1F879FB71f02a4E0b9258852ec",
  "token-drop"
);
```

## Donating Tokens

We use the `claim` function and pass in the desired amount of tokens to donate inside a `Web3Button` component:

We store a value the user types into an input field in state:

```jsx
const [amountToClaim, setAmountToClaim] = useState("");

// ...

<div className={styles.claimGrid}>
  <input
    type="text"
    placeholder="Enter amount to donate"
    onChange={(e) => setAmountToClaim(e.target.value)}
    className={`${styles.textInput} ${styles.noGapBottom}`}
  />
  <Web3Button
    colorMode="dark"
    contractAddress="0xf1765d27B7040D1F879FB71f02a4E0b9258852ec"
    action={(contract) => contract.erc20.claim(amountToClaim)}
    onSuccess={() => alert("Donated!")}
    onError={(err) => alert(err)}
  >
    Donate Tokens
  </Web3Button>
</div>;
```

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/cd thirdweb](https://discord.gg/thirdweb).
