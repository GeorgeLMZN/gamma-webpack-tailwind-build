import { gsap } from "gsap";
let tl = gsap.timeline({repeat: 0});
    tl.to(".scale-container-animation", {duration: 1, scale: 1, ease: "expoScale(0.5, 3, power2.inOut)"})
    .fromTo(".logo-anim img",{opacity: 0}, {duration: 1, opacity: 1, ease: "expoScale(0.5, 3, power2.inOut)"})
    .fromTo(".load-line",{width: 0}, {duration: 1, width: 300, ease: "expoScale(0.5, 3, power2.inOut)"})
    .to(".scale-container-animation", {duration: 1.5, scale: 0, opacity: 0, ease: "expoScale(0.5, 3, power2.inOut)"})


    //.fromTo(".scale-container-animation",{opacity: 1} ,{duration: 1.5, opacity: 0})
    //.fromTo(".register-header",{opacity: 0} ,{duration: 1.5, opacity: 1})
    //.fromTo(".register-main",{opacity: 0} ,{duration: 1.5, opacity: 1}, '-=1.5')
    //.fromTo(".register-footer",{opacity: 0} ,{duration: 1.5, opacity: 1}, '-=1.5')