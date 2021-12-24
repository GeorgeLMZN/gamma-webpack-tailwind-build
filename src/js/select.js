"use strict";

import { gsap } from "gsap";

export default class Select {
    constructor (input, options, yOffset) {
        this.input = input;
        this.options = options;
        this.yOffset = yOffset;
    }
    init() {
        this.input.addEventListener("click", (e) => {
                this.toggle(this.options);
                if(this.options.classList.contains("opened")){
                    this.appear();
                    this.chooseElem();
                }else{
                    this.dissapear();
                }
        })
    }
    toggle(options) {
        options.classList.toggle("opened");
    }
    chooseElem() {
        this.options.addEventListener("click", (e) => {
            if(e.target.classList.contains("option")) {
                this.input.value = e.target.textContent.trim();
                this.dissapear();
            }
        })
    }
    appear() {
        gsap.fromTo(this.options,{scale: 0 , y: -this.yOffset, x: 170},{ duration: 0.2, scale: 1, y: 0, x: 0, ease: "expoScale(0, 1)"});
    }
    dissapear() {
        gsap.to(this.options, {duration: 0.2, scale: 0 , y: -this.yOffset, x: 170, ease: "expoScale(1, 0)"});
        this.options.classList.remove("opened");
    }
}

const inputs = document.querySelectorAll(".select-input");
if(inputs.length > 0) {
    inputs.forEach((e) => {
        const optionsList = e.parentNode.querySelector(".select-options");
        const yOffset = optionsList.clientHeight / 2;
        const select = new Select (e, optionsList, yOffset);
        select.init();
    })
}
