import { cn } from "../../lib/utils";

interface ButtonProps {


  children:
    React.ReactNode;


  variant?:
    "primary"
    |
    "outline";


  className?:
    string;


}



export default function Button({

  children,

  variant = "primary",

  className,

}: ButtonProps) {


  return (

    <button

      className={cn(

        "px-8 py-4 text-sm tracking-widest uppercase transition-all duration-500",

        variant === "primary" &&

          "bg-accent text-white hover:opacity-80",


        variant === "outline" &&

          "border border-border hover:bg-black hover:text-white",


        className

      )}

    >

      {children}

    </button>

  );

}