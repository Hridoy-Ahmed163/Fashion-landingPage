import React from 'react'
import Image from 'next/image'
import Vector9 from '@/public/asset/Vector 9.png'
import HeroImage from '@/public/asset/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png'
import HAndM from '@/public/asset/Brands/hAndM-$1.png'
import Obey from '@/public/asset/Brands/obey-$1.png'
import Shopify from '@/public/asset/Brands/shopify-$1.png'
import Lacoste from '@/public/asset/Brands/lacoste-$1.png'
import Levis from '@/public/asset/Brands/levis-$1.png'
import Amazon from '@/public/asset/Brands/amazon-$1.png'


const Hero = () => {
  return (
    <div>
      <div className='flex flex-col justify-between items-center mx-auto pt-5 pb-10 w-full h-full bg-[#ffffff]'>
        <div className='w-11/12 lg:h-[540px] sm:h-full rounded-[59px] bg-[#e3edf8]'>


          <div className='grid md:grid-cols-2 m-auto pt-10'>
            <div className='relative flex flex-col justify-center w-full sm: ps-[20px] lg:ps-[85px]'>
              <h1 className='uppercase font-extrabold lg:font-black text-6xl lg:text-7xl leading-[4rem] lg:leading-[5rem] text-slate-950 pt-0 z-10'>
                let&apos;s <br />
                explore <br />
                <span>unique <br /></span>
                clothes.
              </h1>
              <div className='absolute inset-0 transform -rotate-2 z-1 top-[5px] lg:left-[62px] w-[200px] lg:w-[320px] h-[60px] lg:h-[80px] sm:left-1 bg-[#ffffff] overflow-x-hidden	' />
              <div className='absolute inset-0 transform -rotate-2 z-1 top-[132px] lg:top-[162px] lg:left-[62px] w-[300px] lg:w-[370px] h-[60px] lg:h-[80px] sm:left-1 bg-[#EBD96B] overflow-x-hidden	' />
              <p className='text-slate-900 my-[25px]'>Live for Influential and Innovative fashion!</p>
              <div className='md:flex '>
                <Image src={Vector9} alt='vector' className='hidden md:inline p-3' />
                <button className='uppercase text-white bg-slate-950 h-12 w-[140px] rounded-md'>shop now</button>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full mt-10 md:mt-0'>
              <Image
                height={500}
                width={500}
                src={HeroImage}
                alt='hero'
              />
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center w-full bg-[#EBD96B] h-[120px] md:h-[174px]'>
        <ul className='flex items-center md:h-[80px] gap-4 md:gap-14 p-5'>
          <li><Image src={HAndM} alt='H&M' /></li>
          <li><Image src={Obey} alt='Obey' /></li>
          <li><Image src={Shopify} alt='Shopify' /></li>
          <li><Image src={Lacoste} alt='Lacoste' /></li>
          <li><Image src={Levis} alt='Levis' /></li>
          <li><Image src={Amazon} alt='Amazon' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
