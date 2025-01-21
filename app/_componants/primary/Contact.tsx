import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SignupFormDemo } from '../contact/Contac';

function Contact() {
    return (
        <div className="parent" id="contact">
            <div className="container max-w-full  px-[50px] py-[90px]">

                <div className="two grid grid-cols-2 max-xl:gap-[40px] max-md:grid-cols-1 max-md:gap-[20px] items-center justify-items-center">
                    <div className="text text-white max-md:w-full">
                        <h1 className='text-[50px] font-bold text-[#bec1dd] '>Contact Me</h1>
                        <p className='w-[500px] max-xl:w-full text-[#ccc] max-md:w-fit'>We’d love to hear from you! Whether you have questions, feedback, or just want to connect, reach out and let’s make it happen.</p>
                        <div className="address flex  gap-[20px] flex-col py-[25px]">
                            <div className="ele flex items-center gap-[20px] text-[20px] font-bold text-[#9ca3af]">
                                <BsTelephone />
                                <h1>+20 01110343035</h1>
                            </div>
                            <div className="ele flex items-center gap-[20px] text-[20px] font-bold text-[#9ca3af]">
                                <MdOutlineEmail />
                                <h1>seiftube1@gmail.com</h1>
                            </div>

                        </div>
                    </div>
                    <div className="form">
                        {/* <div className="rounded-2xl bg-[#393e46] p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div> */}
                        <SignupFormDemo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
