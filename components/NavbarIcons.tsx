"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { BiCartAdd } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GrNotification } from 'react-icons/gr'
import Cartmodal from './Cartmodal'

const NavbarIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const isLoggedIn = false
    const router = useRouter()

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }

    return (
        <div className='flex items-center gap-4 xl:gap-6  justify-center relative'>
            <div className="flex flex-col gap-2 justify-center items-center">

                <CgProfile className='cursor-pointer' onClick={handleProfile} />
                {isProfileOpen &&
                    (<div
                        className='absolute p-4 rounded-md text-sm left-0 top-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'
                    >Profile Is Open</div>)
                }
            </div>

            <GrNotification className='cursor-pointer' />

            <div className="cart flex flex-col items-center justify-center gap-4 relative text-center">
                <div className="flex justify-center items-center">
                    <BiCartAdd className='cursor-pointer '
                        onClick={() => setIsCartOpen((prev) => !prev)}
                    />

                </div>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-buyCart rounded-full text-white flex items-center justify-center text-center text-sm">5</div>
                {/* <div className="mt-4"> */}
                {isCartOpen && (<div> <Cartmodal /> </div>)}
                {/* </div> */}
            </div>

        </div>
    )
}

export default NavbarIcons
