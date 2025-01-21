"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EmailJSResponseStatus } from "@emailjs/browser";
// import { Label } from "./label";
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


export function SignupFormDemo() {


    const ref: any = useRef("")

    const [fname, setfName] = useState("")
    const [lname, setlName] = useState("")
    const [email, setEmail] = useState("")
    const [massege, setMassege] = useState("")
    const [phone, setPhone] = useState("")


    const [isSended, setform] = useState(false)

    const [ready, setReady] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        setReady(true)
        if (massege !== "" && email !== "") {
            emailjs.send("service_wgwh92i", "template_lin1k1e", {
                to_name: "seifEldeen Ali",
                from_name: fname + lname,
                message: `
            FromEmail:${email}
            Phone:${phone}

            Masssege =>

            ${massege}
            
            `,

            }, {
                publicKey: "9qq9fc3Tr6Pb2zuBV",
            }).then(() => {
                console.log("Succces")
                setform(true)
            }).catch(() => {
                console.log("Failed")
                setform(false)
            })
        } else {
            setform(false)
            setTimeout(() => {
                setReady(false)
            }, 5000)
        }
    };
    return (
        <div className="max-w-md w-full max-md:p-[35px] rounded-[30px]  mx-auto  md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0e162b] dark:bg-black">
            {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Aceternity
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to aceternity if you can because we don&apos;t have a login flow
                yet
            </p> */}

            <form ref={ref} className="my-8 text-white" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
                    <LabelInputContainer>
                        <label className="font-bold" htmlFor="firstname">First name</label>
                        <Input id="firstname" placeholder="SeifEldeen" type="text" onChange={((e) => {
                            setfName(e.target.value)
                        })} />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label className="font-bold" htmlFor="lastname">Last name</label>
                        <Input id="lastname" placeholder="Ali" type="text" onChange={((e) => {
                            setlName(e.target.value)
                        })} />
                    </LabelInputContainer>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
                    <LabelInputContainer>
                        <label className="font-bold" htmlFor="email">Email</label>
                        <Input id="email" onChange={((e) => {
                            setEmail(e.target.value)
                        })} placeholder="sefoo@gmail.com" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label className="font-bold" htmlFor="phone">Phone</label>
                        <Input id="phone" onChange={((e) => {
                            setPhone(e.target.value)
                        })} placeholder="20+ 01000000000" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <label htmlFor="massege">Massege</label>
                    <textarea name="massege" id="" className={cn(
                        `flex h-32 w-full border-none bg-[#000319] dark:bg-zinc-800 text-white dark:text-white border-[1px] border-[#2b3042] rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
                           file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                           focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                            disabled:cursor-not-allowed disabled:opacity-50
                            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                            group-hover/input:shadow-none transition duration-400
                 
                            `)}
                        onChange={((e) => {
                            setMassege(e.target.value)
                            console.log(e.target.value)
                        })}
                    ></textarea>
                </LabelInputContainer>
                <button
                    className="bg-gradient-to-br relative group/btn from-from-zinc-900 dark:from-zinc-900 dark:to-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Send &rarr;
                    <BottomGradient />
                </button>

                {ready ? (
                    <div className={`succes mt-[10px] flex gap-[15px] items-center ${isSended ? "text-green-400" : "text-red-500 "}`}>
                        <>
                            {isSended && massege ? (
                                <>
                                    <FaCheckCircle />
                                    <h1>The Massege is Send</h1>
                                </>
                            ) : (
                                <>
                                    <FaTimesCircle />
                                    <h1>Failed Send</h1>
                                </>
                            )}
                        </>
                    </div>
                ) : null}

                {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}


            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
