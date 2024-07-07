import React from 'react'
import Profile from '../profile'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex items-center justify-between gap-3 py-4 w-[1144px] px-24'>
        <div className='flex justify-center items-center'>
            <Image src="/atom-logo.svg" width={130} height={60} alt='ATOM Solution Logo' className='w-[130px] h-[80px] object-contain' />
        </div>
        <Profile />
    </div>
  )
}

export default Header
