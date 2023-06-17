import React from 'react'

function Stats() {
  return (
    <div className='mt-10'>

        <div className="flex justify-center">
            <div className="stats bg-primary text-primary-content">
                <div className="stat">
                <h2 className="text-xl font-bold mb-4">Burn Statistics</h2>
                <div className="stat-title">Total Airdoge Burned</div>
                <div className="stat-value">$89,400</div>
                <div className="stat-actions">
                    <a target="_blank" rel="noreferrer" href="https://arbiscan.io/token/0x09E18590E8f76b6Cf471b3cd75fE1A1a9D2B2c2b?a=0x000000000000000000000000000000000000dEaD" className="btn btn-sm btn-success">burn address: 0x000000000000000000000000000000000000dEaD</a>
                </div>
                </div>
                <div className="stat">
                <div className="stat-title">Percentage Burned</div>
                <div className="stat-value">50%</div>
                <div className="stat-actions">
                    <button className="btn btn-sm">Withdrawal</button>
                    <button className="btn btn-sm">Deposit</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats