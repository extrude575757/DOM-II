

import { gsap } from "gsap";
import { gsapAll } from "gsap/all";

if (process.client) {
  gsap.registerPlugin(gsapAll);
}

let currentScreenX = window.screen.width;
let currentScreenY = window.screen.height;
let block = document.querySelectorAll('.block');
block.forEach(e =>{
    e.addEventListener('click', (event) =>{
        let perc = getScreenCords(currentScreenX,currentScreenY,90);
        // let square = document.querySelector(e['classList'][1]);
        gsap.to('.'+e['classList'][1], {translateX: perc.width,duration: 3, rotation: 360});
    });
});

getScreenCords = (width,height,percent) =>{
    // return pixles from a desired percentage given screen width and height
    /*
(desired %)  50%  =  ?px     100px * 50% = 5000 / 100%
            100%   100px (w or h)
    */
    let w = (width * percent)/100;
    let h = (height * percent)/100;
    let objR = {width:w,height:h};
    return objR;

};
console.log(getScreenCords(100,100,50));