import { cn } from "@/lib/utils";
import type {
  SectionTheme
} from "@/types/theme";


interface SectionProps
extends SectionTheme {


  children:
    React.ReactNode;


  className?:
    string;


}


export default function Section({

  theme = "light",

  children,

  className,

}: SectionProps) {


  return (

    <section

      className={cn(

        "py-24 md:py-32",

        theme === "dark"

          ? "bg-[#111111] text-[#F8F5EF]"

          : "bg-background text-foreground",

        className

      )}

    >

      {children}

    </section>

  );

}