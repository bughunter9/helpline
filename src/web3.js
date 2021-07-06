import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis(
  "a829b9e7-1449-4dd1-8302-bed21b9d8e53",
  "maticMumbai"
);
const web3 = new Web3(portis.provider, "https://rpc-mumbai.matic.today");

export default web3;
