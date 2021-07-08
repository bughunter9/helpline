import React, { forwardRef, useState, useEffect } from 'react';
import web3 from '../../web3';
import './Posts.css';

const courtABI = require("../../abis/Marketplace.json").abi;
const courtContractAddress = "0x743f0F439193C2dD043DC225EecF5638E523646a"; //rinkeby

const Post = forwardRef(({index, name, resLink, amount, walletAddress}, ref) => {

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
            index
          ) => {
            contract.methods
              .donateProduct(index)
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
                <button type='submit' className="approval__Button" 
                        onClick={() => donateProduct(index)}>
                    Approve
                </button>
        </div>
    </div>
    );
})

export default Post;
