import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { showDrawer, showLoginWindow, showSignupWindow } from 'store/slices/utilSlice';

import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi';

import Web3Call from 'utils';
import Web3 from 'web3';
import { BEP20_ABI } from 'config/abi';

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { open, close } = useWeb3Modal();
    const { isConnected, address } = useAccount();
    const [balance, setBalance] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            getBalance();
        }, [1000])

        return () => clearInterval(interval);
    }, []);

    const getBalance = async () => {
        if(!isConnected || !address)
            return ;
        try {
            const web3_read = new Web3(process.env.NEXT_PUBLIC_RPC_URL);
            const tokenContract = new web3_read.eth.Contract(BEP20_ABI, process.env.NEXT_PUBLIC_TOKEN_ADDRESS);

            const balance = await Web3Call.callSmartContract(tokenContract, "balanceOf", [address]);

            setBalance(parseFloat(Web3.utils.fromWei(balance)).toFixed(2));
            return;
        } catch (e) {
            console.log("RoundList", e)
        }
    };


    return (
        <div className="w-full flex items-center h-[5rem] px-[1.25rem] py-[1.0625rem] header-shadow">
            <div className='relative grow flex justify-between items-center px-[1.5rem] w-full'>
                <div className='flex items-center mr-[97.55px]'>
                    <button className='flex justify-center items-center transition-all duration-300 z-10'
                        onClick={() => {
                            router.push("https://zort.com/")
                        }}
                    >
                        <Image
                            src='/images/logo.png'
                            alt='Zort'
                            width={90}
                            height={37}
                        />
                    </button>
                </div>
                <div className='flex justify-end items-center relative z-10'>
                    { isConnected ?
                        <button className='rounded-[10px] text-[14px] text-white font-semibold bg-black flex justify-center items-center min-w-[158px] h-[44px] px-[14px]'
                            onClick={() => { open(); }}
                        >
                            { balance >= 0 ?
                                <p className=''> Balance: <span className='text-[#6EB119]'>{balance}</span> USD </p> :
                                <p> loading </p>
                            }

                        </button> :
                        <>
                        <button className='rounded-[10px] text-[14px] text-black font-semibold bg-[#BFFF0B] flex justify-center items-center w-[158px] h-[44px]'
                            onClick={() => { open(); }}
                        >
                            <Image alt="wallet" width={16} height={16} src="/images/wallet.png" />
                            <p className='ml-[10px]'> Connect Wallet </p>
                        </button>
                        </>
                    }

                    <div className='flex lg:hidden ml-[2rem] justify-center items-center relative'>
                        <button onClick={(e) => { dispatch(showDrawer()) }}>
                            <Image alt="" width={28} height={19} src="/images/header/bars.png" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}