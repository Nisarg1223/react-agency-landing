import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef, useState } from 'react'
import { NavbarContext } from '../context/NavContext'

const FullscreenNav = () => {

    const FullNavLinksRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const fullScreenRef = useRef(null)

    
    useGSAP(function () {
        const tl = gsap.timeline()
        tl.from('.stairing', {
            height: 0,
            delay: 0.5,
            stagger: {
                amount: -0.25
            }
        })
        tl.from(FullNavLinksRef.current, {
            opacity: 0
        })
        tl.from('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.25
            }
        })
        tl.pause();
        if (navOpen) {
            FullNavLinksRef.current.style.display = "block"
            tl.play()
        }
        else {
            FullNavLinksRef.current.style.display = "none"

            tl.reverse();
        }

    }, [navOpen])


    return (
        <div ref={fullScreenRef} id="fullscreennav" className='hidden text-white h-screen overflow-hidden w-full z-50 absolute bg-[#000000]'>

            <div className='h-screen w-full fixed'>
                <div className='h-full  w-full flex'>
                    <div className='stairing h-full w-1/5 bg-red-900'></div>
                    <div className='stairing h-full w-1/5 bg-red-900'></div>
                    <div className='stairing h-full w-1/5 bg-red-900'></div>
                    <div className='stairing h-full w-1/5 bg-red-900'></div>
                    <div className='stairing h-full w-1/5 bg-red-900'></div>
                </div>
            </div>
            <div ref={FullNavLinksRef} className='relative'>
                <div className="flex w-full justify-between items-center">
                    <div className='p-4 w-full flex justify-between'>
                        <div className='w-40'>
                            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                        <div onClick={function(){
                            setNavOpen(false)
                        }} className="h-32 w-32 relative cursor-pointer">
                            <div className='h-44 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
                            <div className='h-44 w-1  right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

                        </div>
                    </div>
                </div>
                <div id="alllinks" className="py-14">
                    <div className='link origin-top relative  overflowx-hidden border-y-1'>
                        <h1 className="font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Projects</h1>

                        <div className="moveLink flex absolute text-black bg-[#D3FD50] flexitems-center top-0">
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative  border-y-1'>
                        <h1 className="font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Agence</h1>

                        <div className="moveLink flex absolute text-black bg-[#D3FD50] flexitems-center top-0">
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link origin-top relative  border-y-1'>
                        <h1 className="font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Contact</h1>

                        <div className="moveLink flex absolute text-black bg-[#D3FD50] flexitems-center top-0">
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='link relative origin-top border-y-1'>
                        <h1 className="font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Blogue</h1>

                        <div className="moveLink flex absolute text-black bg-[#D3FD50] flexitems-center top-0">
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className="moveX flex  items-center">
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className="whitespace-nowrap font-[font2] text-center text-[8vw] leading-[0.8] pt-7 uppercase">Pour Tout voir</h2>
                                <img className="h-36 w-80 object-cover shrink-0 rounded-full" src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullscreenNav
