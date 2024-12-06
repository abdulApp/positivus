import Image from 'next/image'
import React from 'react'

import HeroImg from '@/app/assets/heroImg.png'
import amazon from '@/app/assets/CompanyLogo/amazonLogo.png'
import dribbble from '@/app/assets/CompanyLogo/dribbbleLogo.png'
import hobspot from '@/app/assets/CompanyLogo/hobspotLogo.png'
import netflix from '@/app/assets/CompanyLogo/netflixLogo.png'
import notion from '@/app/assets/CompanyLogo/notionLogo.png'
import zoom from '@/app/assets/CompanyLogo/zoomLogo.png'

export default function Hero() {
  return (
    <>
    <div className='mt-16 w-screen h-screen pt-10'>
        <div className='w-full h-[80%] bg-white flex px-16'>
            <div className='w-1/2 h-full flex flex-col justify-center items-start gap-16'>
                <h1 className='text-8xl'>Navigating the digital landscape<br/>for success</h1>
                <p className='text-4xl'>Our digital marketing agency hleps businesses<br/>grow and succeed online through a range of<br/>services including SEO, PPc, social media and marketing, and content creation.</p>
                <button className='bg-black text-white text-4xl border-2 border-r-4 border-b-4 border-[#B9FF66] py-4 px-8 rounded-xl shadow-2xl'>Book a consultation</button>
            </div>
            <div className='w-1/2 h-full flex justify-center items-center'>
                <Image src={HeroImg} alt="Hero" width={750} height={750} />
            </div>
        </div>
        <div className='w-full h-[20%] py-4 flex justify-around items-center gap-6'>
            <Image src={amazon} alt="company logo" className='grayscale' width={150} height={120} />
            <Image src={dribbble} alt="company logo" className='grayscale' width={150} height={120} />
            <Image src={hobspot} alt="company logo" className='grayscale' width={150} height={120} />
            <Image src={netflix} alt="company logo" className='grayscale' width={150} height={120} />
            <Image src={notion} alt="company logo" className='grayscale' width={150} height={120} />            
            <Image src={zoom} alt="company logo" className='grayscale' width={150} height={120} />
        </div>
    </div>
    </>
  )
}
