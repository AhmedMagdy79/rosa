//Select element function
seletElement = (ele) => {
    return document.querySelector(ele);
}

toggleBtn = seletElement('.menu-toggle');
body = seletElement('body');

toggleBtn.addEventListener('click', ()=>{
    body.classList.toggle('open')
})

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:600
})

sr.reveal('.animate-right',{
    origin:'right',
    duration:1000,
    distance:'25rem',
    delay:600
})

sr.reveal('.animate-top',{
    origin:'top',
    duration:1000,
    distance:'25rem',
    delay:600
})

sr.reveal('.animate-bottom',{
    origin:'left',
    duration:1000,
    distance:'25rem',
    delay:600
})