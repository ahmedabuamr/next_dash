import React from 'react'

export default function TopCards() {
  return (
    <div className=' grid lg:grid-cols-5 gap-4 p-4'>
        <div className=' lg:col-span-2 col-span-1 flex justify-between w-full bg-white p-4 border rounded-lg'>
            <div className=' flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>$4,584</p>
                <p className=' text-gray-600'>Daily Revenue</p>
            </div>
            <p className=' bg-green-200 flex justify-center items-center rounded-lg p-2'>
                <span className=' text-green-700 text-lg'>+18%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full bg-white p-4 border rounded-lg'>
        <div className=' flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>7,594,22</p>
                <p className=' text-gray-600'>Orders</p>
            </div>
            <p className=' bg-green-200 flex justify-center items-center rounded-lg p-2'>
                <span className=' text-green-700 text-lg'>+14%</span>
            </p>
        </div>
        <div className='bg-white p-4 flex justify-between w-full border rounded-lg'>
        <div className=' flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11,153</p>
                <p className=' text-gray-600'>Customers</p>
            </div>
            <p className=' bg-green-200 flex justify-center items-center rounded-lg p-2'>
                <span className=' text-green-700 text-lg'>+20%</span>
            </p>
        </div>
    </div>
  )
}
