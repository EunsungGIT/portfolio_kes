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

/* 텍스트 모션 */
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
            complete++;
            output += to;
        } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
        } else {
            output += from;
        }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
        this.resolve();
        } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
        }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }}

const phrases = [
'Web Developer',
'Frontend',
'Web Publisher',
'Developer',
'Web Designer',
'Frontend Developer'];

const el = document.querySelector('.text');
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
    });
    counter = (counter + 1) % phrases.length;
};

next();