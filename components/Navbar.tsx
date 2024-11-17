import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Searchbar from './Searchbar'
import NavbarIcons from './NavbarIcons'
import { FaHeart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <div className="tracking-wide text-2xl">
                    <Link href='/'> BUY </Link>
                </div>
                <Menu />
            </div>
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                <div className="Left w-1/3 flex items-center gap-12 xl:w-1/2">
                    <div className="tracking-wide text-2xl">
                        <div className="logo"> <FaHeart /> </div>
                        <Link href='/'> BUY </Link>
                    </div>
                    {/* Links */}
                    <div className="hidden xl:flex gap-4">
                        <Link href='/' >Home</Link>
                        <Link href='/cart' >Cart</Link>
                        <Link href='/checkout'>Chekout</Link>
                        <Link href='/deals' >Deals</Link>
                        <Link href='/about' >About</Link>
                    </div>
                </div>
                <div className="right w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
                    <Searchbar />
                    <NavbarIcons />
                </div>
            </div>
        </div>
    )
}
export default Navbar