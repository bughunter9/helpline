import React, { forwardRef, useState, useEffect } from 'react';
import web3 from '../../web3';
import './Posts.css';

const courtABI = require("../../abis/Marketplace.json").abi;
const courtContractAddress = "0x1689dd47983565c98f382879a98c74c0cdc7b060"; //rinkeby

const Post = forwardRef(({name, resLink, amount, walletAddress}, ref) => {

    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState();

      // Setup Contracts on App Load
        useEffect(() => {
            async function contractsSetup() {
            setContract(new web3.eth.Contract(courtABI, courtContractAddress));
            }
            contractsSetup();

            web3.eth.getAccounts((error, accounts) => {
            console.log(accounts);
            setAccount(accounts[0]);
            });
        }, []);

        const donateProduct = (
            id
          ) => {
            contract.methods
              .donateProduct(id)
              .send({
                from: account,
              })
              .then((r) => {
                console.log(r);
              });
          };

  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Requested By : <strong>{name}</strong></h2>
            <h3>Amount : <strong>{amount}</strong> Eth</h3>
            <h4>Wallet Address : {" "}
                <a target="_blank" rel="noopener noreferrer" href={walletAddress}>
                    Address
                </a>
            </h4>
            <h4>Proof : {" "}
                <a target="_blank" rel="noopener noreferrer" href={resLink}>
                    Link
                </a>
            </h4>
                <button type='submit' className="approval__Button" onClick={donateProduct}>
                    Approve
                </button>
        </div>
    </div>
    );
})

export default Post;
