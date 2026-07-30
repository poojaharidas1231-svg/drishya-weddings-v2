import gsap from "gsap";


export const initializeGSAP = () => {

  gsap.defaults({

    ease:
      "power3.out",

    duration:
      1,

  });


  return gsap;

};


export { gsap };