import React from "react";

const Information = () => {
  return (
    <div className="hero min-h-1/2 bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-center items-center gap-6">
        <img
          src="/assets/s3_fml7J.jpg_large"
          className="max-w-md rounded-lg shadow-2xl"
          alt="Box Office"
        />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">What is AIDOGE?</h1>
          <p className="py-6">
            AIDOGE is a deflationary token. It will be used by AIDOGE ecosystem applications. The total supply is 210,000,000,000,000,000 tokens. AIDOGE belongs to everyone in the Arbitrum community and is also a necessary key to unlock the future chapters of the AIDOGE story.
          </p>
          <p className="py-6">
            AIDOGE has a 8% burning tax, so adjusting your slippage tolerance to around 20% is suggested when buying/selling to ensure your successful transactions. Every time you buy AIDOGE, you will receive a Lucky Drop ticket with a chance to win an ARB prize based on the purchase amount. You can also stake your AIDOGE to earn more.
          </p>  
          <div className="flex justify-around">
            <button className="btn btn-accent">Buy $Bark</button>
            <button className="btn btn-secondary-content text-primary">View Docs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
