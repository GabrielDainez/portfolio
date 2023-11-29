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


ScrollReveal().reveal('.titulo, .titulo-habilidades, .titulo-portfolio, .titulo-contato' , { origin: 'top'});


ScrollReveal().reveal('.skill-content, .portfolio-content, form' , { origin: 'bottom'});

ScrollReveal().reveal('.foto' , { origin: 'left'});

/*========================links=========================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id +']').classList.add('active');
            })

        }
    })
}

AOS.init();