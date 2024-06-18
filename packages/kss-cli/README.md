# Kaia Service SDK CLI

kss-cli is a command line utility for kaia service sdk. <br/>
kss-cli supports below features.
* `Oracles` - Hardhat project containing Witnet integrations with kaia.

## Install

```typescript
npm install -g @kaiachain/kss-cli --force
```

## Quick Usage

### Version

```bash
> kss-cli --version 
0.0.1
```

### Help

```typescript
> kss-cli --help
> kss-cli help oracle
```
### Setup

#### Oracles

To download the Kaia's integration with witnet oracle hardhat project, please follow below steps

```typescript
> kss-cli oracle init

> cd oracle-starter-kit
> npm install --force
```

Above command downloads the `oracle-starter-kit` hardhat folder structure in the current project directory. 
Enter inside the generated folder and install the packages as mentioned and please follow the `oracle-starter-kit` README description.