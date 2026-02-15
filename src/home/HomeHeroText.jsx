import React from 'react'
import Video from './video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 text-center'>
            <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[8vw]'>L'étincelle</div>
            <div className='text-[9.5vw] flex items-start justify-center uppercase leading-[8vw]'>
                qui 
                <div className='h-[7vw] w-[16vw] rounded-full  -mt-3 overflow-hidden'>
                    <Video/>
                </div>
                    génère
             </div>
            <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>la créativité</div>
        </div>
    )
}

export default HomeHeroText
