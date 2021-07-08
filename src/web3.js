import Portis from "@portis/web3";
import Web3 from "web3";

const portis = new Portis(
  "a829b9e7-1449-4dd1-8302-bed21b9d8e53",
  "rinkeby"
);
const web3 = new Web3(portis.provider, "https://rinkeby.infura.io/v3/9515ae369f684ea6b35282faada1fc89");

export default web3;
