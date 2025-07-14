import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <footer className='flex flex-col-reverse md:flex-row items-center justify-between w-full px-8 border-t py-4'>
      {/* LEFT SIDE */}
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src={assets.logo} alt='Logo' />
        <div className='hidden md:block h-7 w-px bg-gray-500/60'></div>
        <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
          Copyright 2025 © NirajEdemy. All Rights Reserved.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex items-center gap-3 md:ml-auto mt-4 md:mt-0'>
        <a href='#' aria-label='Facebook'>
          <img src={assets.facebook_icon} alt='Facebook Icon' className='w-5 h-5' />
        </a>
        <a href='#' aria-label='Twitter'>
          <img src={assets.twitter_icon} alt='Twitter Icon' className='w-5 h-5' />
        </a>
        <a href='#' aria-label='Instagram'>
          <img src={assets.instagram_icon} alt='Instagram Icon' className='w-5 h-5' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
