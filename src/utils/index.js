import Web3 from "web3";
import { BEP20_ABI, BET_ABI } from "config/abi";

class Web3Calls {
    constructor() {
        this.URI = "/api"
    }

    // Read
    async callSmartContract(contract, func, args) {
        if (!contract) return false;
        if (!contract.methods[func]) return false;
        return contract.methods[func](...args).call();
    }

    // Write
    async runSmartContract(contract, func, value, args, address) {
        if (!contract) return false;
        if (!contract.methods[func]) return false;
        return await contract.methods[func](...args).send({ from: address, value: value })
    }

    async estimateGas(contract, func, value, args, address) {
        try {
            const gasAmount = await contract.methods[func](...args).estimateGas({ from: address, value: value });
            return {
                success: true,
                gas: gasAmount
            }
        } catch (e) {
            console.error(e);
            if (e.message.startsWith("Internal JSON-RPC error.")) {
                e = JSON.parse(e.message.substr(24));
            }
            return {
                success: false,
                gas: -1,
                message: e.message
            }
        }
    }

    async setAllowance(token, sender, amount) {

        try {
            const web3 = new Web3(Web3.givenProvider);
            const tokenContract = new web3.eth.Contract(BEP20_ABI, token);

            const am = Web3.utils.toBN("1000000000000000000").mul(Web3.utils.toBN(amount)).toString();
            const args = [sender, am];
            const func = "approve";

            const { success, gas, message } = await estimateGas(tokenContract, func, 0, args);

            if (!success) {
                return {
                    error: true,
                    message
                };
            }
            const res = await runSmartContract(tokenContract, func, 0, args)
            await checkApproved();
            return {
                success: true,
            };
        } catch (e) {
            return {
                success: true,
            };
        }
        return;
    }
}

const Web3Call =  new Web3Calls()
export default Web3Call;