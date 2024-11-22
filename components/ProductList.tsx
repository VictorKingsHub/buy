import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex mt-12 gap-x-8 gap-y-16 justify-between flex-wrap bg-teal-500 w-screen h-fit'>
      <Link href={"/list"} className='w-full flex flex-col gap-4 '>
      <Image alt='' src={"/img3.jpg"} width={25} height={200}  className='absolute object-cover rounded-md'/>
      Hello
      </Link>
    </div>
  )
}

export default ProductList
