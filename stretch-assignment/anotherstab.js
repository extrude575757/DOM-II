

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


let clicked = false;
let currentScreenX = window.screen.width;
let currentScreenY = window.screen.height;
let block = document.querySelectorAll('.block');
// Block thrown on mousedown For more than 2 sec
const mouseDownThrow = () =>{
    block.forEach(e =>{
        e.addEventListener('mousedown', (event) =>{
            clicked = false;
            let perc = getScreenCords(currentScreenX,currentScreenY,60);
            // let square = document.querySelector(e['classList'][1]);
            gsap.to('.'+e['classList'][1], {translateX: perc.width,duration: 3, rotation: 360});
        });
    });
    clearInterval(interV);
}
// Block thrown on click for less than 2 sec
const clickThrow = () => {
    block.forEach(e =>{
        clicked = true;
        e.addEventListener('click', (event) =>{
            let perc = getScreenCords(currentScreenX,currentScreenY,70);
            // let square = document.querySelector(e['classList'][1]);
            gsap.to('.'+e['classList'][1], {translateY: -perc.height,duration: 3, rotation: 360});
        });
    });
    clearInterval(interV);
}
// Find out if mouse Up is activated and return true;
const mouseUpThrown = () =>{
    block.forEach(e =>{
        e.addEventListener('mouseup', (event) =>{
            clicked = true;
        });
    });
}

const initIt = (sec) =>{
    
    if(sec <= 100 && clicked === true){
        clickThrow();

        sec = 0;
    }else
    mouseDownThrow();    
    sec = 0;
}
let interV = setInterval(function(){
    let sec = time.getSeconds();
    console.log(sec);
    initIt(sec); 
}, 2000);
        
