import React, { forwardRef , useState } from 'react';
import './Posts.css';

const Post = forwardRef(({name, amount }, ref) => {

  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("0x0");
  const [contract, setContract] = useState(null);
  const [value, setValue] = useState("0.01");

  const approve = async (e) => {
    e.preventDefault();
    const res = await contract.methods.approveRequest(1).send({
      from: account,
      gas: web3.utils.toHex("50000"),
    });

    };


  return (
    <div ref={ref} className='post'>
        <div className='post__info'>
            <h2>Donated By : <strong>{name}</strong></h2>
            <h3>Amount Donated: <strong>{amount}</strong> Eth</h3>
            <button type='submit' className="approval__Button" onClick={approve}>
                    Approve</button>
        </div>
    </div>
    );
})

export default Post;
