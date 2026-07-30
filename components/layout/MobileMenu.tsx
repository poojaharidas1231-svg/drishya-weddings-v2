"use client";


import Link from "next/link";


import {
  navigation
} from "../../constants/navigation";



interface MobileMenuProps {

  close:
    ()=>void;

}



export default function MobileMenu({

  close

}:MobileMenuProps){


  return (

    <div

      className="
      fixed
      inset-0
      bg-[#111111]
      text-[#F8F5EF]
      flex
      flex-col
      items-center
      justify-center
      "

    >


      <div

        className="
        flex
        flex-col
        gap-8
        text-center
        "

      >


      {
        navigation.map(
          (item)=>(


            <Link

              key={
                item.href
              }

              href={
                item.href
              }

              onClick={
                close
              }

              className="
              text-3xl
              font-serif
              "

            >

              {item.label}

            </Link>


          )
        )
      }


      </div>


    </div>

  );


}