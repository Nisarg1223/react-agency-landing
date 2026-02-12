import React from 'react'
import {Link} from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex item-center pb-1 justify-center gap-2'>
     
     <Link className='text-[6.5vw] border-4 leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 pt-3 pb-0 uppercase' to='/projects'>Projects</Link>
     <Link className='text-[6.5vw] border-4 leading-[7vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 pt-3 pb-0 uppercase' to='/agence'>Agence</Link>

    </div>
  )
}

export default HomeBottomText
