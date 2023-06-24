import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount } from 'wagmi'



const Navbar = ({open,close}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { address, isConnecting, isDisconnected } = useAccount()

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleConnectWallet = () => {
    // Implement your logic to connect the crypto wallet here
    // This function will be called when the "Connect Wallet" button is clicked
    open()
  };

  useEffect(()=>{
    if(address){
      console.log("address: ",address)
    }
  },[address])

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <img src="/assets/1Y_zf_5Z.jpg_large" height={100} width={100} alt="logo" className="rounded-full" />

        <div className="flex items-center lg:hidden">
          <button
            className="btn text-primary bg-primary-content rounded-full bg-accent"
            onClick={handleToggleMobileMenu}
          >
            Menu
          </button>
        </div>

        <div
          className={`lg:flex flex-col lg:flex-row justify-between items-center gap-16 ${
            isMobileMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/">
            <span className="text-primary cursor-pointer">Home</span>
          </Link>
          <Link href="/lp">
            <span className="text-primary cursor-pointer">LP</span>
          </Link>
          <Link href="/earn">
            <span className="text-primary cursor-pointer">Earn</span>
          </Link>
          <Link href="/luckyDrop">
            <span className="text-primary cursor-pointer">Lucky Drop</span>
          </Link>
          <Link href="/aicode">
            <span className="text-primary cursor-pointer">AICode</span>
          </Link>
          <Link href="/nft">
            <span className="text-primary cursor-pointer">NFT</span>
          </Link>
        </div>

        {/* <div className="hidden lg:block"> */}
        <div className="block mb-5">
          {
            address ? 
            (
              <button
                className="btn text-primary bg-primary-content rounded-full bg-accent"
                onClick={handleConnectWallet}
              >
                {address}
              </button>
            )
            :
           (
              <button
            className="btn text-primary bg-primary-content rounded-full bg-accent"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
          
            )

          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
