"use client";


import Image from "next/image";

import {
  motion
} from "framer-motion";


import {
  fadeUp,
  scaleReveal
} from "../../animations";


import Container from "../ui/Container";



export default function Hero(){


return (

<section

className="
relative
min-h-screen
flex
items-center
overflow-hidden
bg-[#F8F5EF]
"

>


{/* Background Image Layer */}

<div

className="
absolute
inset-0
"

>


<Image

src="/images/hero.jpg"

alt="Drishya Weddings"

fill

priority

className="
object-cover
object-center
"

 />


<div

className="
absolute
inset-0
bg-black/30
"

/>


</div>



<Container>


<div

className="
relative
z-10
max-w-5xl
text-white
"

>


<motion.p

variants={fadeUp}

initial="hidden"

animate="visible"

className="
uppercase
tracking-[0.4em]
text-xs
mb-8
"

>

Luxury Wedding Photography

</motion.p>




<motion.h1

variants={fadeUp}

initial="hidden"

animate="visible"

transition={{
delay:0.2
}}

className="
font-serif
text-6xl
leading-none
md:text-9xl
"

>

Stories

<br/>

That

<br/>

Live Forever

</motion.h1>




<motion.p

variants={fadeUp}

initial="hidden"

animate="visible"

transition={{
delay:0.4
}}

className="
mt-8
max-w-md
text-lg
text-white/80
"

>

Authentic emotions.
Cinematic frames.
Timeless wedding stories crafted across India.

</motion.p>



</div>


</Container>



</section>


);

}