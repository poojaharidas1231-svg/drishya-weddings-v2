import { transitions } from "./transitions";


export const fadeUp = {

  hidden: {

    opacity:
      0,

    y:
      40,

  },


  visible: {

    opacity:
      1,

    y:
      0,


    transition:
      transitions.luxury,

  },

};



export const fadeIn = {


  hidden: {

    opacity:
      0,

  },


  visible: {

    opacity:
      1,


    transition:
      transitions.smooth,

  },


};



export const scaleReveal = {


  hidden: {

    opacity:
      0,

    scale:
      1.08,

  },


  visible: {

    opacity:
      1,

    scale:
      1,


    transition:
      transitions.smooth,

  },


};



export const slideLeft = {


  hidden: {

    opacity:
      0,

    x:
      60,

  },


  visible: {

    opacity:
      1,

    x:
      0,


    transition:
      transitions.luxury,

  },


};