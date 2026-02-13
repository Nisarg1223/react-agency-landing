import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = ({children}) => {

  const stairParentRef = useRef(null)
  const PageRef = useRef(null)
const currentPath =   useLocation().pathname

    useGSAP(function(){
  const tl = gsap.timeline()
     tl.to(stairParentRef.current,{
      display:'block'
    })
    tl.from('.stair',{
      height:0,
   
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairParentRef.current,{
      display:'none'
    })
    tl.to('.stair',{
      y:'0%',
    })

    gsap.from(PageRef.current,{
        opacity:0,
        delay:1.2,
        scale:1.2
    })
},[currentPath])
  return (
     <div>
        <div ref={stairParentRef} className='h-screen w-screen fixed z-20 top-0'>
     <div className='h-full  w-full flex'>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
    <div className='stair h-full w-1/5 bg-black'></div>
  </div>
  </div>
<div ref={PageRef}>
      {children}
</div>
     </div>
  )
}

export default Stairs
