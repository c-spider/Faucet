import { useState, useEffect } from "react";

import Header from "../Header";

import { ClipLoader, BarLoader } from 'react-spinners'
import { useUtil } from "store/hook";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";

import Web3 from "web3";
import Web3Call from "utils";

import { showOverlay, hideOverlay } from "store/slices/utilSlice";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FAUCET_ABI = [{"inputs": [
    {
      "internalType": "address",
      "name": "addr",
      "type": "address"
    }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function"}];

export default function Layout({ children }) {
    const dispatch = useDispatch()
    const { isOverlay, isSpinner, comment } = useUtil();

    const {address, isConnected} = useAccount();
    const [_address, setAddress] = useState(address);

    useEffect(() => {
        setAddress(address)
    }, [address])

    const onClaim = async () => {
        dispatch(showOverlay("Waiting"));

        try {
            const web3 = new Web3(Web3.givenProvider);
            const faucetContract = new web3.eth.Contract(FAUCET_ABI, process.env.NEXT_PUBLIC_FAUCET_ADDRESS);

            const { success, gas, message } = await Web3Call.estimateGas(faucetContract, "claim", 0, [_address], address);

            if (!success) {
                toast.error("Transaction Failed", message);
                dispatch(hideOverlay());
                return;
            }
            const res = await Web3Call.runSmartContract(faucetContract, "claim", 0, [_address], address)

            toast.success("100 USDC received!");
            dispatch(hideOverlay());
            return;
        } catch (e) {
            toast.error("Transaction Failed")
            console.log(e);
        }
        dispatch(hideOverlay());
    }

    return (
        <div>
            <Header />

            <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-5rem)] overflow-y-auto lg:overflow-y-hidden pb-[300px]">
                <h2 className="text-white text-[60px] mb-[20px]"> Faucet </h2>
                <div className="min-w-[500px] h-[60px] px-[20px] text-white text-[18px] bg-transparent border-[1px] border-[#5F6368] rounded-full flex justify-center items-center mb-[20px]">
                    <input type="text" value={_address} onChange={(e) => {setAddress(e.target.value)}} className="w-full outline-none bg-transparent text-center" placeholder="Copy and past your address."/>
                </div>
                <div>
                    <button className="bg-[#303134] text-white rounded-[6px] px-[20px] py-[8px] text-[14px]" onClick={onClaim}>
                        Get USDT
                    </button>
                </div>
            </div>

            { isOverlay &&
                <div className='z-100 fixed w-screen h-screen top-0 left-0 bg-[#00000070] flex flex-col justify-center items-center'>
                    <div className="flex flex-col justify-center items-center p-[2rem] rounded-[1rem] border-[3px] border-[#ffffff80] backdrop-blur-sm bg-[#00000030]">
                        <p className="text-white mb-[0.5rem]"> {comment} </p>
                        <BarLoader speedMultiplier={0.5} color='white' size={50} width={200} />
                    </div>
                </div>
            }
            <ToastContainer />
        </div>
    )
} 

