"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <IoMenu className='cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
            {open &&
                <div className='flex flex-col items-center justify-center gap-8 text-xl z-10 bg-black text-white left-0 top-20 w-full absolute h-[calc(100vh-80px)]'>
                    <Link href='/' >Home</Link>
                    <Link href='/cart' >Cart</Link>
                    <Link href='/checkout' >Chekout</Link>
                    <Link href='/deals' >Deals</Link>
                    <Link href='/about' >About</Link>
                </div>}


        </div>
    )
}

export default Menu
