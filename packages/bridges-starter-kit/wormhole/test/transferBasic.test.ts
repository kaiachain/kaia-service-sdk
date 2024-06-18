import { expect } from "chai"
import { transferBasic } from "../use-cases"

describe("transfer", () => {
    test("Token basic transfer", async () => {
        const config = { restAddress: "https://wormhole-v2-testnet-api.certus.one" };
        const source = {
          token: "0x0FD3f122A9B6471928B60eeE73bF35D895C4Ee01",
          privatekey: "",
          rpcUrl: "https://public-en.kairos.node.kaia.io",
          coreBridge: "0x1830CC6eE66c84D2F177B94D544967c774E624cA",
          tokenBridge: "0xC7A13BE098720840dEa132D860fDfa030884b09A",
          wormholeChainId: "13" 
        };
        const destination = {
          privatekey: "",
          rpcUrl: "https://ethereum-goerli-rpc.allthatnode.com",
          tokenBridge: "0xF890982f9310df57d00f659cf4fd87e65adEd8d7",
          wormholeChainId: "2" 
        }
        const AMOUNT = "1";
        const IS_NATIVE = false;

        const expectedOutput = "0x345";
        const actualOutput = await transferBasic(config, source, destination, AMOUNT, IS_NATIVE);
        expect(expectedOutput).to.equal(actualOutput.hash);
    });
});