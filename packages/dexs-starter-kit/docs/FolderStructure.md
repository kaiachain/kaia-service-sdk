# Folder Structure
- **[/contracts](../contracts)** - includes typechains of all the DEX's contracts i.e: [@kaiachain/dex-contracts](https://www.npmjs.com/package/@kaiachain/dex-contracts)
- **[/core](../core)** - includes all the integration scripts of DEX-contracts core functionalities
    - **[/Swap.ts](../core/Swap.ts)** - includes all the integration scripts of DEX's Swap contract
    - **[/Liquidity.ts](../core/Liquidity.ts)** - includes all the integration scripts of DEX's Liquidity contract
    - **[/MultiSig.ts](../core/MultiSig.ts)** - includes all the integration scripts of DEX's Multisig contract
    - **[/Farming.ts](../core/Farming.ts)** - includes all the integration scripts of DEX's Farming contract
    - **[/Staking.ts](../core/Staking.ts)** - includes all the integration scripts of DEX's Staking contract
    - **[/index.ts](../core/index.ts)** - is main file of all _`core/`_ scripts mentioned above.
    - **[/Config.ts](../core/Config.ts)** - provides direct instance of each DEX's contract for the sake of customized functionalities to get integrated more easily.
