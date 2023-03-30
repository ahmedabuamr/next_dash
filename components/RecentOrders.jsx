import React from 'react'
import {data} from '../data/data'
import {FiShoppingBag} from 'react-icons/fi'
export default function RecentOrders() {
  return (
    <div className=' col-span-1 w-full p-4 lg:h-[70vh] h-[50vh] relative m-auto bg-white rounded-lg border overflow-y-scroll'>
        RecentOrders

        <ul>
           {
            data.map((order)=>(
                <li key = {order.id} className=' bg-gray-50  hover:bg-gray-100 p-2 my-3 flex items-center cursor-pointer'>
                  <div className=' bg-purple-100 rounded-lg p-2'>
                    <FiShoppingBag className=' text-purple-800'/>
                  </div>
                  <div className='pl-4'>
                    <p className=' text-gray-800 font-bold'>${order.total}</p>
                    <p className=' text-gray-400 text-sm'>{order.name.first}</p>
                  </div>
                  <p className='lg:flex md:hidden absolute text-sm right-6'>{order.date}</p>
                </li>
            ))
           }
        </ul>
     </div>
  )
}
