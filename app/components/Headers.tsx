import React from 'react'
import PintuLogo from '../assets/svg/PintuLogo'
import ID from '../assets/svg/Id'
import DownArrow from '../assets/svg/DownArrow'
import TripleLine from '../assets/svg/TripleLine'
import Link from 'next/link'

export default function Headers() {
  return (
    <div className='py-8 px-6'>
      <div className='flex flex-row justify-between'>
        <Link href='/'>
          <PintuLogo />
        </Link>
        <div className='flex flex-row xl:gap-[5rem] gap-[2rem] max-md:hidden font-medium'>
          <Link href='/fitur'>Fitur</Link>
          <Link href='/ptu'>PTU</Link>
          <Link href='/edukasi'>Edukasi</Link>
          <Link href='/ikut-kami'>Ikuti Kami</Link>
          <Link href='/blog-news'>Blog & News</Link>
          <Link href='/karier'>Karier</Link>
          <span className='flex flex-row gap-[0.375rem] cursor-pointer'>
            <ID />
            ID
            <div className='rotate-180 flex items-center'>
              <DownArrow />
            </div>
          </span>
        </div>
        <div className='md:hidden'>
          <TripleLine />
        </div>
      </div>
    </div>
  )
}
