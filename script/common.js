/* 스크롤 */
const scrollBtn = document.querySelector('#scrollBtn')

scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
    });
})

/* 마우스 */
const circle = document.querySelector('#circle')
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

/* 새 창 */
function openLink(url) {
    window.open(url, '_blank');
}

/* header */
const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});