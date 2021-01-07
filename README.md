# Deployment guide line

## Prerequire
1. Install Ganache or Ganache CLI (need only for local net)
2. Intall NodeJs (10+)
3. Install Truffle latest version
    Currently: 
    Truffle v5.1.60 (core: 5.1.60)
    Solidity v0.5.16 (solc-js)
    Web3.js v1.2.9

## Config beneficiary and owner of token
1. Clone source from git `https://github.com/triggah61/dappx.git`
2. Goto migrations folder and open file `2_deploy_contracts.js`
3. Update `beneficiaryAddress` and `owershipAddress`
    * MAKE SURE YOU ARE SET UP CORRECT ADDRESS, IF NOT YOU WILL LOSS YOUR TOKENS OR YOUR CONTROL

## Compile and deploy
1. `cd dappx`
2. `npm i`
3. Config private key for deployment account, open truffle-config.js and enter your private key to deploy to correct network
`const privateKey = "c26e27d81c21000a1e64a9a676d5cbf0bb39aea2ce78300446bbd8f2903e0428";` (private is without `0x` before)
4. Update `gasPrice` with relevant value to network situation (ref: `https://etherscan.io/gastracker`)
5. Run deploy command `truffle migrate --reset --network {network}`

    `{network}` could be one of:
    * development
    * ropsten
    * kovan
    * rinkeby
    * mainnet
