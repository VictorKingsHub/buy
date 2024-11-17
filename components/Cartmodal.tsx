"use client"
import Image from 'next/image';
import React from 'react'

const Cartmodal = () => {

  const cartItems = true;

  return (
    <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col ga-6 z-20'>
      {!cartItems ? (
        <div className='text-xl'>The Cart is Empty</div>
      ) : (<div className='flex flex-col justify-center '>
        <h2 className="text-xl">Shopping Cart</h2>
        <div className="flex flex-row justify-center gap-2 p-1 items-start">
          <Image src={"/img1.png"} height={5} width={30} alt='Cart Image' className="object-cover w-full h-full" />
          <div className="flex flex-col ">
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row items-center justify-center gap-12'>
                <div className="left gap-4">
                  <p className='text-sm'>Digital Income</p>
                  <span className='text-xs'>Selected</span>
                </div>
                <div className="right text-sm">$405.6</div>
              </div>
              <div className="r flex flex-row gap-10 justify-center items-center">
                <span className='text-xs'> Digitally </span>
                <span className='text-xs'>Recorded</span>
              </div>
            </div>
            <div className='flex flex-row justify-start items-center gap-8 text-xs'>
              <p>Subcoined</p>
              <p >$65</p>
            </div>
            <div className="long mt-2">
              <p className='text-xs'>Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className="buttons flex flex-row gap-2 mt-3">
              <button className=' ring-1 ring-gray-300 text-xs rounded-md px-2'>View Cart</button>
              <button className='bg-teal-500 text-white text-xs rounded-md px-2'>Checkout</button>
            </div>
          </div>
        </div>

      </div>)
      }

    </div>
  )
}

export default Cartmodal
