/* intro */
gsap.fromTo('.intro h2',{
    x:-50,
    opacity:0,
},{
    scrollTrigger:'.intro',
    duration:1,
    x:0,
    opacity:1,
})
gsap.fromTo('.intro p',{
    opacity:0,
},{
    scrollTrigger:'.intro',
    duration:1,
    delay:0.5,
    opacity:1,
})

/* about */
gsap.fromTo('.about h2',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.about',
    duration:1,
    y:0,
    opacity:1,
})
gsap.fromTo('.about .left',{
    scale:0,
    opacity:0,
},{
    scrollTrigger:'.about',
    duration:1,
    scale:1,
    opacity:1,
})
gsap.fromTo('.about .right > p',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.about',
    duration:1,
    delay:0.2,
    y:0,
    opacity:1,
})
gsap.fromTo('.about .right .info',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.about',
    duration:1,
    delay:0.4,
    y:0,
    opacity:1,
})
gsap.fromTo('.about .right .education',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.about',
    duration:1,
    delay:0.6,
    y:0,
    opacity:1,
})

/* skill */
const develop_skill_info = document.querySelectorAll('.develop .skill_info')
const design_skill_info = document.querySelectorAll('.design .skill_info')
const etc_skill_info = document.querySelectorAll('.etc .skill_info')

gsap.fromTo('.skill h2',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.skill',
    duration:1,
    y:0,
    opacity:1,
})
gsap.fromTo('.develop h3',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.skill',
    duration:1,
    y:0,
    opacity:1,
})
develop_skill_info.forEach((t,i)=>{
    gsap.fromTo(t,{
        y:100,
        opacity:0,
    },{
        scrollTrigger:'.about',
        duration:1,
        delay:0.2 * i,
        y:0,
        opacity:1,
    })
})
gsap.fromTo('.design h3',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.skill',
    duration:1,
    y:0,
    opacity:1,
})
design_skill_info.forEach((t,i)=>{
    gsap.fromTo(t,{
        y:100,
        opacity:0,
    },{
        scrollTrigger:'.about',
        duration:1,
        delay:0.2 * i,
        y:0,
        opacity:1,
    })
})
gsap.fromTo('.etc h3',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.skill',
    duration:1,
    y:0,
    opacity:1,
})
etc_skill_info.forEach((t,i)=>{
    gsap.fromTo(t,{
        y:100,
        opacity:0,
    },{
        scrollTrigger:'.about',
        duration:1,
        delay:0.2 * i,
        y:0,
        opacity:1,
    })
})

/* project */
const recent_a = document.querySelectorAll('.recent a')

gsap.fromTo('.project .text h2',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.project',
    duration:1,
    y:0,
    opacity:1,
})
gsap.fromTo('.project .text p',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.project',
    duration:1,
    y:0,
    opacity:1,
})
for(let i of recent_a){
    gsap.fromTo(i,{
        scale:0,
        opacity:0,
    },{
        scrollTrigger:'.project',
        duration:1,
        delay:0.5,
        scale:1,
        opacity:1,
    })
}
gsap.fromTo('#projectBtn',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.project',
    duration:1,
    delay:1,
    y:0,
    opacity:1,
})

/* contact */
gsap.fromTo('.contact h2',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.contact',
    duration:1,
    delay:1,
    y:0,
    opacity:1,
})
gsap.fromTo('.contact #contactBtn',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.contact',
    duration:1,
    delay:1,
    y:0,
    opacity:1,
})