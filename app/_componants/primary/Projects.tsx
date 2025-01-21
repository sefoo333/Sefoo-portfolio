import React from 'react'
import { MagicCard } from '../Card'
import Image from 'next/image'
import { Card, HoverEffect } from '../Projects/Projects_comp'
import { AvatarCircles } from '../Skills_images'
import { FaGithub, FaPlay } from "react-icons/fa";

function Projects() {


    const data = [{
        Title: "Salaty App",
        Description: "It is an application to track Islamic prayers and read supplications and remembrances. You can listen to the radio station you like and automatically choose your country.",
        Github: "https://github.com/sefoo333/salaty_project",
        Preview: "https://salaty-bice.vercel.app/",
        technologies: ["next (1).svg", "react.svg", "ts.svg", "tailwind.svg"],
        Image: "salaty.png",
    },
    {
        Title: "Social Media App",
        Description: `It is a responsive e-commerce website Developed platform using React.js and tailwind CSS and sass, allowing 
users to browse products, add to cart, and checkout securely and added the products to favorite`,
        Github: "https://github.com/sefoo333/social-media-app-full-stack",
        Preview: "https://sefoomedia-sefoo333s-projects.vercel.app/",
        technologies: ["next (1).svg", "react.svg", "ts.svg", "tailwind.svg", "firebase-svgrepo-com.svg"],
        Image: "sefoomedia.png",
    }, {
        Title: "Wii App",
        Description: `It is an application for creating forms and tests created by next/firebase and is characterized by a responsive design. You can add essay or optional questions and review the solutions to the form you created and other features.`,
        Github: "https://github.com/sefoo333/wii",
        Preview: "https://wii-green.vercel.app/",
        technologies: ["next (1).svg", "react.svg", "ts.svg", "tailwind.svg", "firebase-svgrepo-com.svg"],
        Image: "wii.png",
    }, {
        Title: "Ecommerce App",
        Description: `It is a responsive e-commerce website Developed platform using React.js and tailwind CSS and sass, allowing 
users to browse products, add to cart, and checkout securely and added the products to favorite`,
        Github: "https://github.com/sefoo333/salaty_project",
        Preview: "https://salaty-bice.vercel.app/",
        technologies: ["react.svg", "js.svg", "tailwind.svg"],
        Image: "sefoostore.png",
    },


    ]

    return (
        <div className="parent">
            <div className="container max-w-full px-[50px] py-[90px]">
                <div className="header   text-white font-bold mb-[20px] text-center text-[50px]">
                    <h1>Projects</h1>
                </div>
                <div className="projects w-full grid grid-cols-2 max-md:grid-cols-1 justify-center justify-items-center gap-[50px] mt-[40px]">


                    {data.map((e: any) => (
                        <MagicCard
                            className="cursor-pointer  max-md:w-full w-[90%] bg-white/20  p-[20px]  flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
                            gradientColor="#D9D9D955"
                            fontText='30px'
                            className2="w-full h-full"
                        >
                            <div className="image flex justify-center">
                                <Image className='rounded-[30px] max-md:w-full transition-[1s] hover:grayscale hover:scale-105' src={`/${e.Image}`} alt="" width={500} height={300} />
                            </div>
                            <div className="text flex flex-col p-[11px]">
                                <h1 className='text-[24px] max-md:text-[16px] mt-[10px] font-bold'>{e.Title}</h1>
                                <p className='text-[17px] w-full mt-[5px] max-md:text-[15px] text-[#ccc] text-wrap leading-[25px]'>{e.Description}</p>
                            </div>

                            <div className="two mt-[30px] flex items-center justify-between flex-row-reverse px-[10px]">
                                <div className="buttons flex gap-[25px]">
                                    <a href={e.Github}>
                                        <FaGithub size={25} />
                                    </a>
                                    <a href={e.Preview} >
                                        <FaPlay size={25} />
                                    </a>
                                </div>
                                <div className="skills flex">
                                    {e.technologies.map((a) => (
                                        <div className="icon  rounded-full flex items-center justify-center p-[5px]">
                                            <Image src={`/${a}`} alt="" width={25} height={25} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </MagicCard>
                    ))}

                </div>

                <div className="buttons flex justify-center items-center mt-[40px]">
                    <button className="shadow-[inset_0_0_0_2px_#616467] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                        <a href="https://github.com/sefoo333?tab=repositories" target='_blank'>Show More</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects
