/* main */
gsap.fromTo('.main h2',{
    x:-100,
    opacity:0,
},{
    scrollTrigger:'.main',
    duration:1,
    x:0,
    opacity:1,
})

/* develop */
const develop_project_a = document.querySelectorAll('.develop .project a')

develop_project_a.forEach((t,i)=>{
    gsap.fromTo(t,{
        y:100,
        opacity:0,
    },{
        scrollTrigger:'.develop',
        duration:1,
        delay:0.4 * i,
        y:0,
        opacity:1,
    })
})

/* design */
gsap.fromTo('.design .sns_container',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.design',
    duration:1,
    y:0,
    opacity:1,
})
gsap.fromTo('.design .bnr_container',{
    y:100,
    opacity:0,
},{
    scrollTrigger:'.design',
    duration:1,
    delay:0.5,
    y:0,
    opacity:1,
})

var swiper = new Swiper(".sns_container", {
    autoplay:{delay:2000},
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
});

var swiper = new Swiper(".bnr_container", {
    autoplay:{delay:3000},
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    freeMode: true,
});