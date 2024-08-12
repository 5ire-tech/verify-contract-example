# How to verify evm contract on 5ireChain


## Step 1: Compile the contract 

```bash
npx hardhat compile
```

## Step 2: Deploy contract on 5ireChain  

### Deploy on testnet 
```
npx hardhat run --network thunder scripts/deploy.js
```


### Deploy on mainnet 
```
npx hardhat run --network mainnet scripts/deploy.js
```


## Step 3: Verify contract on 5ireChain 

### Verify contract on testnet 

```bash
npx hardhat verify <contractAddress> --network thunder
```

### Verify contract on mainnet 

```bash
npx hardhat verify <contractAddress> --network mainnet
```