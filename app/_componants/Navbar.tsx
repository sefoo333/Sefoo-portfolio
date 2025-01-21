import React from 'react'

function FloatingNavDemo() {
    return (
        <nav className='flex justify-center bg-[#0c1227] fixed border-[1px] border-[#5d5757] mt-[20px]  left-1/2 rounded-[70px] z-[99999999999999999999] translate-x-[-50%] '>
            <div className="container w-[800px] max-md:w-fit flex items-center  px-[40px] py-[15px]  justify-between   ">
                <h1 className='text-[25px] text-white font-bold max-md:hidden'>Sefoo</h1>

                <ul className='list-none flex gap-[25px] text-white cursor-pointer'>
                    <li className='transition-all hover:text-[#00ADB5]'>About</li>
                    <li className='transition-all hover:text-[#00ADB5]'>Services</li>
                    <li className='transition-all hover:text-[#00ADB5]'>Projects</li>
                    <li className='transition-all hover:text-[#00ADB5]'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export { FloatingNavDemo }
