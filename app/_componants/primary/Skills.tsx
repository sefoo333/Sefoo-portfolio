import React from 'react'
import { MagicCard } from '../Card'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

function Skills() {


    const test = [
        <TiHtml5 />,
        <FaCss3 />,
        <IoLogoJavascript />,
        <SiTypescript />,
        <FaReact />,
        <RiNextjsFill />,
        <RiTailwindCssFill />,
        <FaWordpress />
    ];

    return (
        <div className="parent">
            <div className="container py-[50px] px-[90px] max-md:px-[30px]">
                <div className="header  text-white font-bold mb-[20px] text-center text-[50px]">
                    <h1>Skills</h1>
                </div>

                <div className="skills grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 gap-[30px] mt-[15px] max-md:grid-cols-2">

                    {test.map((e) => (
                        <MagicCard
                            className="cursor-pointer transition-[1s] hover:scale-105 flex-col items-center  py-[60px] px-[30px] max-md:px-[15px] max-md:py-[30px] max-md:text-[35px]  justify-center whitespace-nowrap text-[70px] shadow-2xl"
                            gradientColor="#D9D9D955"
                        >
                            {e}
                        </MagicCard>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills
