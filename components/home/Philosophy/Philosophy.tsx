"use client";

import Container from "@/components/ui/Container";

import PhilosophyContent from "./PhilosophyContent";
import PhilosophyImage from "./PhilosophyImage";


export default function Philosophy() {

  return (

    <section

      className="
      bg-[#F8F5EF]
      py-24
      md:py-40
      "

    >

      <Container>


        <div

          className="
          grid
          gap-16
          lg:grid-cols-2
          lg:items-center
          "

        >


          {/* Content */}

          <PhilosophyContent />


          {/* Image */}

          <PhilosophyImage />


        </div>


      </Container>


    </section>

  );

}