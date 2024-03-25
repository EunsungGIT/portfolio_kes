/* intro */
gsap.fromTo('.intro .image',{
    x:-50,
    opacity:0,
},{
    scrollTrigger:'.intro',
    duration:1,
    x:0,
    opacity:1,
})
gsap.fromTo('.intro .info',{
    x:50,
    opacity:0,
},{
    scrollTrigger:'.intro',
    duration:1,
    delay:0.5,
    x:0,
    opacity:1,
})

/* thumnail */
gsap.fromTo('.thumnail .video_wrap',{
    y: 50,
    opacity:0,
},{
    scrollTrigger:'.thumnail',
    duration:1,
    y:0,
    opacity:1,
})
gsap.fromTo('.thumnail .image_wrap',{
    y: 50,
    opacity:0,
},{
    scrollTrigger:'.thumnail',
    duration:1,
    delay:1,
    y:0,
    opacity:1,
})