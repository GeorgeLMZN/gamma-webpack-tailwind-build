"use strict";
import { gsap } from "gsap";


export default class Notes {
    constructor (notes,bg, circle, count, sidebar) {
        this.notes = notes
        this.bg = bg
        this.circle = circle
        this.count = count
        this.next = next
        this.sidebar = sidebar;
    }
    init() {
        const arr = [];
    
        arr.push(this.sidebar);

        this.circle.forEach((e) => {
            arr.push(e);
        })

        this.showNotes(this.count, arr);
        this.showBg();

        this.next.forEach((e) => {
            e.addEventListener('click', (evt) => {
                this.showNotes(this.count , arr);
            })
        });
        console.log(this.circle);
    }
    showNotes(count, arr) {
        this.count = count + 1;

        arr.forEach((e) => {
            e.classList.remove('note-visible');
            e.classList.remove('note-visible-sidebar');
        })
        this.notes.forEach(element => {
           element.classList.remove('open');

           if(element.classList.contains('note-' + this.count)) {
                element.classList.add('open');
                gsap.fromTo('.note',{scale: 0 },{ duration: 0.2, scale: 1, ease: "expoScale(0, 1)"});
                const circle = document.querySelector('.note-circle--' + this.count) || document.querySelector('.note-circle-sidebar--' +  this.count);

                if(circle) {
                    console.log(sidebar)
                    circle.classList.add('note-visible');
                    circle.classList.add('note-visible-sidebar');
                    console.log(circle.getBoundingClientRect());

                    element.style.top = circle.getBoundingClientRect().top + 'px';
                
                    element.style.right = (window.clientWidth - circle.getBoundingClientRect().right) + 'px';
    
                }
           }
        });
    }
    showBg() {
        this.bg.classList.toggle('open');
    }
}


const notes = document.querySelectorAll('.note');

const notesWrapper = document.querySelectorAll('.note-circle');

const bg = document.querySelector('.shadow-bg');

const next = document.querySelectorAll('.next');

const sidebar = document.querySelector('.sidebar');


if(notes && notesWrapper) {
    const notePlayer = new Notes(notes, bg, notesWrapper,0, sidebar);

    notePlayer.init();
}