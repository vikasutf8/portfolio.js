import React from 'react'

import {FaLinkedin, FaGithub,FaInstagram} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'


const Navbar = () => {
  return (
   <nav className='mb-20 flex items-center justify-between py-6'>
<div className='flex flex-shrink-0 items-center'>
  <img className='mx-2 w-10'  src="" alt="hellow" />
</div>
<div  className='m-8 flex items-center justify-center gap-4 text-2xl'>
  <FaGithub/>
  <FaLinkedin/>
  <FaSquareXTwitter/>
  <FaInstagram/>
</div>
   </nav>
  )
}

export default Navbar