import React from 'react'

function Circle() {
  return (
    <div className='mt-10'>
        <div className="flex justify-center gap-6">
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70, "--size": "16rem" }}>70%</div>
        </div>

    </div>
  )
}

export default Circle