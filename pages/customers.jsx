import React from 'react'
import { data } from '@/data/data'
import { BsPersonFill,BsThreeDotsVertical } from 'react-icons/bs'
import MetaTags from '@/meta'

export default function customers() {
    return (
        <>
        <MetaTags title="Customers"/>
        <div className=' bg-gray-100 min-h-screen'>
            <div className=' flex justify-between p-4'>
                <h2 className=' md:text-2xl font-bold'>Customers</h2>
                <h2>Welcome Back, Clint</h2>
            </div>
            <div className='p-4'>
                <div className=' bg-white m-auto p-4 border w-full rounded-lg overflow-y-auto'>
                    <div className=' my-3 p-2 cursor-pointer grid md:grid-cols-4 sm-grid-cols-3 grid-cols-2 gap-4'>
                        <span>Name</span>
                        <span className=' sm:text-left text-right'>Email</span>
                        <span className='md:grid hidden'>Last order</span>
                        <span className='md:grid hidden'>Method</span>
                    </div>
                    <ul>
                        {
                            data?.map((order) => (
                                <li key={order.id} className=' bg-gray-50  hover:bg-gray-100 p-2 my-3 grid md:grid-cols-4 sm-grid-cols-3 grid-cols-2 items-center cursor-pointer'>
                                    <div className=' flex items-center'>
                                        <div className=' bg-purple-100 p-3 rounded-lg'>
                                            <BsPersonFill className=' text-purple-800' />
                                        </div>
                                        <p className='pl-4'>{order.name.first + '' + order.name.last}</p>
                                    </div>
                                    <p className=' text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                                    <p className=' md:grid hidden'>{order.date}</p>
                                    <div className='sm:flex hidden justify-between items-center'>
                                        <p>{order.method}</p>
                                         <BsThreeDotsVertical/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
