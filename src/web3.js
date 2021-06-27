import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis(
  "71ae6adb-ac26-46f8-897f-933cbaf98389",
  "maticMumbai"
);
const web3 = new Web3(portis.provider, "https://rpc-mumbai.matic.today");

export default web3;
