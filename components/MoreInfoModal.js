import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const MoreInfoModal = () => {
  const info=[
    {
      title:'What is the purpose of the $Bark token?',
      des:'$Bark aims to create a decentralized ecosystem that empowers its community with innovative financial solutions.'
    },
    {
      title:'How can I participate in the $Bark community?',
      des:'You can actively engage in community discussions, participate in governance, and contribute to the growth of the ecosystem.'
    },
    {
      title:'How does $Bark leverage AI creatures in its development?',
      des:'AI creatures play a vital role in the development of $Bark by providing advanced algorithms and insights for enhanced functionality.'
    },
    {
      title:' What benefits do $Bark token holders enjoy?',
      des:'$Bark token holders can access exclusive features, participate in token staking and yield farming, and enjoy potential rewards.'
    },
    {
      title:'Is $Bark compatible with popular DeFi platforms?',
      des:'Yes, $Bark is designed to seamlessly integrate with popular DeFi platforms, providing users with a wider range of opportunities.'
    },
    {
      title:' Can I contribute to the development of $Bark?',
      des:'Absolutely! $Bark encourages community involvement and welcomes contributions in shaping its future through feedback and ideas.'
    },
  ]
  return (
    <div className="container mx-auto py-20">
            <p className="text-gray-500 text-2xl font-medium uppercase my-3">
          MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
      Common questions
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
      {info.map((inf,i)=>{
        return(
      
    <Disclosure key={i} >
        {({ open }) => (
          <div className='group'>
            <Disclosure.Button className="flex flex-col group-hover:bg-accent-content group-focus:bg-accent-content w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
              <div className="flex justify-between items-center w-full">
              <span className='group-hover:text-white  group-focus:text-white'>{inf.title}</span>
              <BsFillPlusCircleFill
                className={`${
                  open ? 'rotate-180 transform' : ''
                }  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
              />
              </div>
           
                   <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
              {inf.des}
            </Disclosure.Panel>
            </Disclosure.Button>
       
          </div>
        )}
      </Disclosure>
       
        )
      })}
  
 
    </div>
  </div>
  )
}

export default MoreInfoModal