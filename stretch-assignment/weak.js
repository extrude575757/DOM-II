

import { gsap } from "gsap";
import { gsapAll } from "gsap/all";

if (process.client) {
  gsap.registerPlugin(gsapAll);
}


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
let time = new Date();
let sec = time.getSeconds();
console.log(sec);
let clicked = false;
let currentScreenX = window.screen.width;
let currentScreenY = window.screen.height;
let block = document.querySelectorAll('.block');
// Block thrown on mousedown For more than 2 sec
const mouseDownThrow = () =>{
    block.forEach(e =>{
        e.addEventListener('mousedown', (event) =>{
            
            let perc = getScreenCords(currentScreenX,currentScreenY,60);
            // let square = document.querySelector(e['classList'][1]);
            gsap.to('.'+e['classList'][1], {translateX: perc.width,duration: 3, rotation: 360});
        });
    });
}
// Block thrown on click for less than 2 sec
const clickThrow = () => {
    block.forEach(e =>{
        e.addEventListener('click', (event) =>{
            let perc = getScreenCords(currentScreenX,currentScreenY,70);
            // let square = document.querySelector(e['classList'][1]);
            gsap.to('.'+e['classList'][1], {translateY: -perc.height,duration: 3, rotation: 360});
        });
    });
}
// Find out if mouse Up is activated and return true;
const mouseUpThrown = () =>{
    block.forEach(e =>{
        e.addEventListener('mouseup', (event) =>{
            clicked = true;
        });
    });
}


let startItup;

const initTimeout = () => {
  startItup = setTimeout(() =>{ 
    mouseUpThrown();
    console.log('2000'+clicked);
   }, 2000);
   startItup = setTimeout( ()=>{ 
    if(clicked){
        clickThrow();
    }else{
        mouseDownThrow();
    }
}, 4000);
}

const stopTimeout = () => {
  clearTimeout(startItup);
} 

let blocks = document.querySelector('.blocks');
blocks.addEventListener('click', (event) => {
    initTimeout();
    stopTimeout();
});