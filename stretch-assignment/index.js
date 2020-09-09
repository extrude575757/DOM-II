

import { gsap } from "gsap";
import { gsapAll } from "gsap/all";

if (process.client) {
  gsap.registerPlugin(gsapAll);
}


let block = document.querySelectorAll('.block');
block.forEach(e =>{
    e.addEventListener('click', (event) =>{
        // let square = document.querySelector(e['classList'][1]);
        gsap.to('.'+e['classList'][1], {translateX: '1000',duration: 3, rotation: 360});
    });
});

