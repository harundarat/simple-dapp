import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ChitModule = buildModule("ChitModule", (m) => {
    const chit = m.contract("Chit", [], {});
    return { chit };
});

export default ChitModule;