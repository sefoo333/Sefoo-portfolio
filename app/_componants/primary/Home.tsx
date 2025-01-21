import React from 'react'
import { TextAnimate1 } from '../Text/Text'
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from 'next/image';
import Squares from '../background/background';
import { TextAnimate } from '../Text/Text2';
import { cn } from '@/lib/utils';
import { RainbowButton } from '../Button';
import { Spotlight } from '../background/spotlight';
import { FlickeringGrid } from '../stars';
import { TextHoverEffect } from '../Text_home';


import "./style.css";

function Home2() {
    return (
        <>
            <div className="square w-full h-full absolute bg-[#222831]  -z-10 overflow-hidden">
                {/* <Squares
                    speed={0.5}
                    squareSize={40}
                    direction='diagonal' // up, down, left, right, diagonal
                    borderColor='#44434361'
                    hoverFillColor='#3A3960'
                /> */}
                <FlickeringGrid
                    className="z-0 relative inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                    squareSize={5}
                    gridGap={6}
                    color="#60A5FA"
                    maxOpacity={0.9}
                    flickerChance={0.1}

                />


                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 absolute"
                    fill="white"
                />

            </div>
            <div className="h-full flex items-center absolute z-10 justify-center">
                <TextHoverEffect text="SEFOO" />
            </div>


            <div className="parent_home flex relative z-[99999]">
                <div className="container py-[50px] px-[70px] flex items-center justify-center">
                    <div className="text flex-col flex gap-[20px] justify-center text-center">
                        <div className="primary flex gap-[5px] flex-col text-white">
                            <div className="main text-center uppercase max-md:text-[30px] relative z-[99999]">

                                <TextAnimate animation="slideUp" by="character" segmentClassName="text-[60px] mm1" className='mm1 font-semibold text-center text-[#00ADB5] text-[65px] '>
                                    Hi I'm
                                </TextAnimate>
                                <div className="   max-md:text-[40px]  ">
                                    <TextAnimate animation="slideUp" by="character" segmentClassName="text-[80px] mm2" className="mm2 font-semibold text-center block text-wrap text-[80px] ">
                                        Seifeldeen Ali
                                    </TextAnimate>
                                </div>
                            </div>
                            <div className="secondry text-center w-full flex justify-center relative z-[9999]">
                                {/* <SplitText
                                    text={`Front-end Developer`}
                                    className="text-2xl font-semibold text-center"
                                    delay={120}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                    size="35px"
                                /> */}
                                <TextAnimate animation="blurInUp" segmentClassName="text-[20px] max-md:text-[15px]" className='text-white/80 w-[450px] tracking-[1px] text-center  max-md:text-[15px]' by="character">
                                    a Front-end Developer and Freelancer
                                </TextAnimate>
                            </div>
                        </div>
                        <div className="buttons flex gap-[25px] items-center justify-center text-nowrap">
                            <RainbowButton>
                                <a href="#Aboutme">
                                    Hire me
                                </a>
                            </RainbowButton>
                            <RainbowButton>
                                <a target='_blank' href="https://drive.google.com/file/d/1M7Qi7xefGOLvfzqCs3PLwn9-VlgLwq95/view?usp=sharing">
                                    Download CV
                                </a>
                            </RainbowButton>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home2
