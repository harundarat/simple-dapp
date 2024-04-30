import { useState, useEffect } from 'react'
import abi from "./contractJson/abi.json";
import { ethers } from "ethers";
import { Memos } from "./components/Memos";
import { Buy } from "./components/Buy";
import chai from "./chai.png";

function App() {
  const [state, setState] = useState({ provider: null, signer: null, presaleContract: null, usdtContract: null });
  const [account, setAccount] = useState("");
  useEffect(() => {
    const template = async () => {
      const presaleAddress = "0x2d95D26eB03988a2987c1bf7c0c1100F897ADFa4";
      const usdtAddress = "0x8017525dc7CBd75a1193bd51daA8c12ca11228fE";
      const presaleAbi = abi.presale;
      const usdtAbi = abi.usdt;

      try {
        const { ethereum } = window;

        const account = await ethereum.request({ method: "eth_requestAccounts" });
        window.ethereum.on("accountsChanged", (accounts) => {
          window.location.reload();
        });
        setAccount(account[0]);

        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();

        const presaleContract = new ethers.Contract(presaleAddress, presaleAbi, signer);
        const usdtContract = new ethers.Contract(usdtAddress, usdtAbi, signer);

        setState({ provider, signer, presaleContract, usdtContract });


      } catch (error) {
        console.error(error);
      }


    }

    template();
  }, [])

  return (
    <div className="App">
      <img src={chai} className="img-fluid" alt=".." width="100%" />
      <p style={{ marginTop: "10px", marginLeft: "5px" }}>
        <small>Connected Account - {account}</small>
      </p>

      <Buy state={state} />
      {/* <Memos state={state} /> */}
    </div>
  )
}

export default App
