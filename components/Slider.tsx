"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const slides = [
  {
    id: 1,
    title: "First One",
    description: "Lorem30 Lorem30 Lorem30 Lorem30 Lorem30 Lorem30",
    img: "https://www.pexels.com/photo/boat-in-a-sunny-harbor-22482408/",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-red-50"
  },
  {
    id: 2,
    title: "First One",
    description: "Lorem30 Lorem30 Lorem30 Lorem30 Lorem30 Lorem30",
    img: "https://www.pexels.com/photo/boat-in-a-sunny-harbor-22482408/",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  },
  {
    id: 3,
    title: "First One",
    description: "Lorem30 Lorem30 Lorem30 Lorem30 Lorem30 Lorem30",
    img: "https://www.pexels.com/photo/white-boats-on-body-of-water-2265876/",
    url: "/img5.jpg",
    bg: "bg-gradient-to-r from-yellow-50 to-blue-50"
  },
  {
    id: 4,
    title: "First One",
    description: "Lorem30 Lorem30 Lorem30 Lorem30 Lorem30 Lorem30",
    img: "https://www.pexels.com/photo/white-boats-on-body-of-water-2265876/",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50"
  },
]

const Slider = () => {

  const [current, setCurrent] = useState(0)

  return (
    <div className='h-[calc(100vh-80px)] w-screen overflow-hidden'>
      <div className=" h-full flex transition-all ease-in-out duration-1000 w-max  ">
        {slides.map((slide) => (
          <div className={`${slide.bg}  h-full flex flex-col gap-16 xl:flex-row overflow-hidden`} key={slide.id} >

            <div className="text xl:w-1/2 h-1/2 ">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}> Shop Now </Link>
            </div>

            <div className="img w-1/2 bg-teal-600">
              <Image src={slide.img} alt='' width={300} height={300} className='object-cover' />
            </div>

          </div>


        ))}
      </div>
    // </div>
  )
}

export default Slider
