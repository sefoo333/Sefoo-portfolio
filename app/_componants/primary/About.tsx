import Image from 'next/image'
import React from 'react'
import { ShineBorder } from '../about_box'
import { NumberTicker } from '../Count'

function About() {
    return (
        <div className="parent mt-[200px] flex justify-center" id='About'>
            <div className="container py-[50px] px-[70px] max-md:px-[20px] flex justify-center">
                {/* <ShineBorder className="relative flex w-[1200px] flex-col items-center justify-center overflow-hidden rounded-xl   md:shadow-xl" */}
                {/* color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}> */}
                <div className="two flex gap-[45px] items-center w-[90%] max-lg:flex-col">
                    <div className="results flex flex-col justify-around items-center gap-[45px] mt-[30px] ">
                        <div className="re text-white text-[35px] font-bold text-center">
                            <h1>
                                <NumberTicker value={2} className='text-white' />+
                            </h1>
                            <h2 className='text-[15px] text-[#969da8]'>
                                Years Of Exprience
                            </h2>
                        </div>

                        <div className="re text-white text-[35px] font-bold text-center">
                            <h1>
                                <NumberTicker value={32} className='text-white' />+
                            </h1>
                            <h2 className='text-[15px] text-[#969da8]'>
                                Clients
                            </h2>
                        </div>

                        <div className="re text-white text-[35px] font-bold text-center">
                            <h1>
                                <NumberTicker value={43} className='text-white' />+
                            </h1>
                            <h2 className='text-[15px] text-[#969da8]'>
                                Orders
                            </h2>
                        </div>

                    </div>
                    <div className="image basis-[35%]">
                        <Image className=' h-[450px] object-cover  rounded-3xl transition-all hover:scale-105 hover:grayscale' src={"/photo_5800885931123786664_y.jpg"} alt={""} width={600} height={600} />
                    </div>
                    <div className="words p-[45px] basis-[80%] max-md:px-[0px]">
                        <h1 className='text-[50px] text-white font-bold mb-[20px] max-md:text-center '>About Me</h1>
                        <div className="about text-[14px] font-semibold tracking-[2px] text-white">
                            <p>
                                My Name is seifeldeen Ali,
                                I Enthusiastic and detail-oriented Frontend Developer skilled in building user interfaces with React and Next gaining.
                                hands-on experience in developing interactive, responsive web applications.
                                in addition to, Strong understanding of HTML, CSS, and JavaScript, with a passion for creating smooth and efficient user experiences.
                            </p>
                        </div>
                        <div className="bages mt-[20px] flex gap-[20px]">
                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1 text-sm text-purple-700">
                                Front-end Devloper
                            </span>
                            <span className="whitespace-nowrap rounded-full bg-[#c9f3f5] px-2.5 py-1 text-sm text-[#00ADB5]">
                                Freelancer
                            </span>
                        </div>
                    </div>

                </div>
                {/* </ShineBorder> */}
            </div>
        </div>
    )
}

export default About
