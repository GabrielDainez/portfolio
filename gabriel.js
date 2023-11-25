let btnMenu = document.getElementById('btn-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

/*=====================scrollreveal=====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.content, .titulo, .titulo-habilidades, .titulo-portfolio, .titulo-contato' , { origin: 'top'});


ScrollReveal().reveal('.skill-content, .portfolio-content, form' , { origin: 'bottom'});

ScrollReveal().reveal('.foto' , { origin: 'left'});

