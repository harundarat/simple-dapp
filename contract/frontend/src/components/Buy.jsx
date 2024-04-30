import { ethers } from "ethers";
const Buy = ({ state }) => {

    const buyChai = async (e) => {
        e.preventDefault();

        const { presaleContract, usdtContract } = state;
        const amount = 10000000;
        // const name = document.getElementById("name").value;
        // const message = document.getElementById("message").value;

        // panggil approve dulu
        const approve = await usdtContract.approve(presaleContract.target, amount);
        await approve.wait();
        // baru panggil buyWithUsdt
        const buyMasa = await presaleContract.buyTokensWithUsdt(amount);
        await buyMasa.wait();

        console.info(state);
        console.info("Transaction is successful.");
    }

    return (
        <div>
            <form action="POST" onSubmit={buyChai}>
                {/* <input id="name" type="text" />
                <input id="message" type="text" /> */}
                <button>Beli $10 Masa</button>
            </form>
        </div>
    );
}

export { Buy };