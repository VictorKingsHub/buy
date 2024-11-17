"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchbar = () => {

    const router = useRouter()

    const handleSearch = (e: any) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string

        if (name) {
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form
            className='flex justify-center items-center gap-4 bg-gray-100 p-2 rounded-md flex-1'
            onSubmit={handleSearch}
        >
            <input type="text" name='name' placeholder='Search' className='flex-1 bg-transparent outline-none' />
            <button className="cursor-pointer">
                <BiSearch />
            </button>
        </form>
    )
}

export default Searchbar
