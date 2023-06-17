import React from "react";

const CardComponent = () => {
  return (
    <div className="flex justify-center">
      <div className="w-2/3 lg:w-1/2 xl:w-1/2">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body  space-y-8">
            <h2 className="card-title text-[40px] font-bold text-secondary flex justify-center">
              Airdrop soon!
            </h2>
            <p className="text-gray-500">A total of 210,000,000,000,000,000 AIDOGE tokens are now available to be claimed by those who have claimed the ARB airdrop.
                AIDOGE tokens that have not been claimed within 31 days will be used for the Community Long-Term Incentive Reward Program. The AIDOGE will be distributed to the top contributors of Arbitrum community and burned.</p>
            <div className="alert alert-warning flex items-center my-4 p-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>
            <span className="ml-2">2023.04.15 09:00(UTC+0)-2023.05.15 09:00(UTC+0)</span>
            </div>

            {/* <progress className="progress progress-primary w-56" value={0} max="100"></progress>
            <progress className="progress progress-primary w-56" value={10} max="100"></progress>
            <progress className="progress progress-primary w-56" value={40} max="100"></progress>
            <progress className="progress progress-primary w-56" value={70} max="100"></progress>
            <progress className="progress progress-primary w-56" value={100} max="100"></progress> */}
            <progress className="progress progress-primary w-full" value={70} max="100"></progress>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs mt-4"
              />
            </div>
            <div className="flex justify-center">
              <button className="btn btn-wide btn-outline btn-secondary mt-4">Secondary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
