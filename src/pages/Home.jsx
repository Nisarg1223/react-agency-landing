import React from 'react'
import Video from '../home/video'
import HomeHeroText from '../home/HomeHeroText'
import HomeBottomText from '../home/HomeBottomText'

const Home = () => {
  return (
    <div>
     <div className='h-screen w-screen fixed'>
          <Video/>
     </div>
     <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
      <HomeHeroText/>
      <HomeBottomText/>
     </div>
    </div>
  )
}

export default Home
