import Link from "next/link";


import {
  siteConfig
} from "../../constants/site";



export default function Footer(){


return (

<footer

className="
bg-[#111111]
text-[#F8F5EF]
py-20
"

>


<div

className="
container-luxury
"

>


<div

className="
grid
md:grid-cols-3
gap-12
"

>


<div>

<h3

className="
text-4xl
font-serif
"

>

Drishya Weddings

</h3>


<p

className="
mt-5
text-white/60
max-w-sm
"

>

{
siteConfig.tagline
}

</p>


</div>



<div>

<h4

className="
uppercase
tracking-widest
text-sm
mb-5
"

>

Contact

</h4>


<p>

{
siteConfig.contact.email
}

</p>


<p>

{
siteConfig.contact.phone
}

</p>


</div>




<div>

<h4

className="
uppercase
tracking-widest
text-sm
mb-5
"

>

Follow

</h4>


<Link

href={
siteConfig.social.instagram
}

>

Instagram

</Link>


</div>


</div>



<div

className="
mt-16
border-t
border-white/20
pt-8
text-sm
text-white/50
"

>

© {new Date().getFullYear()} Drishya Weddings. All rights reserved.

</div>



</div>


</footer>

);


}