import React from 'react'
import { InfiniteMovingCards } from '../testimonials'

import { Cairo } from 'next/font/google';


const cairo = Cairo({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "200"]
});

function Thanks() {


    const testimonials = [
        {
            quote: " للأمانه هاذي ثانيه مره اطلب منه عشان يعدل لي كم شغله والرجال فاهم بمعنى الكلمه صح اني اخذت من وقته بس والله صبور وعنده معلومات كثير وبيفيدكم كثير فالك التوفيق ي صاحبي .",
            name: "AbdelRahman",
            title: "",
        },
        {
            quote:
                "ماقصر معاي اسلوبه محترم .. وفنان بمعنى الكلمه خله يضبط سيرفرك وماراح تندم أبد شكرأ لك",
            name: "Salem",
            title: "",
        },
        {
            quote: "ماشاءالله عليه خدوم ويضبط لك الي تبيه بالضبط وافضل شخص يعمل ب احترافيه عاليه والله يوفقه وراح اتعامل معه اكثر من مره",
            name: "Salem A",
            title: "",
        },
        {
            quote:
                "شغل مرتب والتنسيق جميل شكرا على مجهودك وتعبك",
            name: "Turki",
            title: "",
        },
        {
            quote:
                "سريع في الرد وشغله ممتاز واضاف لي اشياء اضافية من عنده انصحكم فيه",
            name: "Ahmed",
            title: "",
        },
    ];


    return (
        <div className="parent flex justify-center">
            <div className="container px-[50px] py-[90px]">
                <div className="header  text-white font-bold mb-[20px] text-center text-[50px] max-md:text-[35px]">
                    <h1>Testimonials</h1>
                </div>
                <div className={`${cairo.className} mt-[40px] rounded-md flex flex-col antialiased text-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden`}>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Thanks
