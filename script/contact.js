gsap.fromTo('main h2',{
    x:-100,
    opacity:0,
},{
    scrollTrigger:'main',
    duration:1,
    x:0,
    opacity:1,
})
gsap.fromTo('main .text',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'main',
    duration:1,
    delay:0.5,
    y:0,
    opacity:1,
})
gsap.fromTo('main #emailFrm',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'main',
    duration:1,
    delay:1,
    y:0,
    opacity:1,
})