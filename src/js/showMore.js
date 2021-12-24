"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

export default class showMore {
    constructor (button, block) {
        this.button = button;
        this.block = block;
    }
    init() {
        this.button.addEventListener('click', (e) => {
            if(e.target.closest('.show-all')) {
                this.toggle();
            } 
        })
    }
    toggle() {
        this.block.classList.toggle('scroll-list');
        this.animIcon();
    }
    animIcon() {
        const icon = this.button.querySelector('svg');
        const item = document.querySelector('.fond-item');
        const items = document.querySelectorAll('.fond-item');

        if(this.block.classList.contains('scroll-list')) {
            gsap.to(icon, {rotate: 180})
            this.block.scrollTo(
                {
                    left: 100,
                    behavior: 'smooth'
                }
            )
            items.forEach((e) => {
                
            })
        }else{
            gsap.to(icon, {rotate: 0})
        }
    }
}

const btn = document.querySelector(".show-all");
const block = document.querySelector(".pai-list");

if(btn && block) {
    const show = new showMore(btn, block);
    show.init();
}

const items = document.querySelectorAll('.fond-item');
const item = document.querySelector('.fond-item');

items.forEach((e) => {
    gsap.to(e, {
        scrollTrigger: {
            scroller: '.pai-list',
            trigger: e,
            start: '20px top',
            scrub: true,
            toggleActions: "play none none"
        },
        scale: 0.5,
        opacity: 0, 
      },
    )
})


