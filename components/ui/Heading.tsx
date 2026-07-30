import { cn } from "@/lib/utils";


interface HeadingProps {


  children:
    React.ReactNode;


  size?:
    "sm"
    | "md"
    | "lg"
    | "xl";


  className?:
    string;

}



const sizes = {


  sm:
    "text-3xl md:text-4xl",


  md:
    "text-5xl md:text-6xl",


  lg:
    "text-6xl md:text-8xl",


  xl:
    "text-7xl md:text-[10rem]",


};



export default function Heading({

  children,

  size = "md",

  className,

}: HeadingProps) {


  return (

    <h2

      className={cn(

        "font-light leading-none tracking-luxury",

        sizes[size],

        className

      )}

    >

      {children}

    </h2>

  );

}