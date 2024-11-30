// import { useState } from "react";
import { useCurrentAccount } from '@mysten/dapp-kit';
import './styles.css';
import WalletButton from '../../component/button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

	const account = useCurrentAccount();
    const navigate = useNavigate();
    // console.log(account.address)

    useEffect(() => {
        if(account?.address) {
            navigate('/app/invest');
        }
    }, [account?.address]);

    return (
        <div className="login">
            <div className='li'>
                <h1>Connect your wallet</h1>
                <div className="su-form-connect">
                    <WalletButton />
                </div>
            </div>
        </div>
    );
}

export default Login;