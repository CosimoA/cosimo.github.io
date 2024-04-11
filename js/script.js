// componenti html utilizzabili da tutti gli scoped
const header = document.querySelector('.header-links');
const navigation = document.querySelector('.navigation > ul')
const info = document.querySelector('.info-me');
const socials = document.querySelectorAll('.socials-jumbo a');
const root = document.documentElement
const link = document.querySelectorAll('.link-page');
let changeColor = localStorage.getItem('dark-mode') ? localStorage.getItem('dark-mode') : 'true';

changeColor == 'true' ? whiteTheme(root) : darkTheme(root);

// impostazioni scroll
document.addEventListener('scroll', function () {
    let scroll = window.scrollY;

    // change color navigation
    if (changeColor == 'true') {
        if (scroll > 500) {
            localStorage.setItem('scroll', '500')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--primary)', 'important');
            }
            root.style.setProperty('--bg-nav', 'rgba(34, 79, 170, 0.2)')
        } else {
            localStorage.setItem('scroll', '0')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)');
            }
            root.style.setProperty('--bg-nav', 'rgba(255, 255, 255, 0.2)')
        }
    } 
    else {
        if (scroll > 500) {
            localStorage.setItem('scroll', '500')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            root.style.setProperty('--bg-nav', 'rgba(255, 255, 255, 0.2)')

        } else {
            localStorage.setItem('scroll', '0')
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--secondary)');
            }
            root.style.setProperty('--bg-nav', 'rgba(255, 255, 255, 0.2)')
        }
    }
})

// cambia tema
document.querySelector('.dark-mode').addEventListener('click', function () {
    if (changeColor == 'true') {
        changeColor = 'false'
        localStorage.setItem('dark-mode', 'false')
        darkTheme(root)
        if (localStorage.getItem('scroll') == '500') {
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--text)', 'important');
            }
            root.style.setProperty('--bg-nav', 'rgba(255, 255, 255, 0.2)')
        }
    } else {
        changeColor = 'true'
        localStorage.setItem('dark-mode', 'true')
        whiteTheme(root)
        if (localStorage.getItem('scroll') == '500') {
            for (let i = 0; i < link.length; i++) {
                link[i].style.setProperty('color', 'var(--primary)', 'important');
            }
            root.style.setProperty('--bg-nav', 'rgba(34, 79, 170, 0.2)')
        }
    }
})


// FUNZIONI
function whiteTheme(root) {
    root.style.setProperty('--secondary', 'white');
    root.style.setProperty('--text', '#262626');
    root.style.setProperty('--bg-nav', 'rgba(6,29,61,0.2)');
    root.style.setProperty('--bg-jumbo', 'rgba(103, 154, 255, 0.5)');
    root.style.setProperty('--bg-cards', 'rgb(245, 243, 243)');
    root.style.setProperty('--blur-filter', 'blur(30px)');
    root.style.setProperty('--shadow', '0px 2px 14px 5px rgba(0,0,0,0.18)');
    root.style.setProperty('--text-shadow', '0px 0px 10px rgba(0, 0, 0, 0.5)');
    root.style.setProperty('--box-shadow', '0px 0px 10px rgba(0, 0, 0, 0.5)');
}

function darkTheme(root) {
    root.style.setProperty('--secondary', 'rgb(43, 43, 43)');
    root.style.setProperty('--text', '#e0e0e0');
    root.style.setProperty('--bg-cards', '#15151d');
    root.style.setProperty('--bg-nav', 'rgba(255, 255, 255, 0.2)');
    root.style.setProperty('--blur-filter', 'blur(10px)');
    root.style.setProperty('--shadow', '0px 1px 14px 5px rgba(255,255,255,0.1)');
    root.style.setProperty('--text-shadow', '0px 0px 10px rgba(160, 192, 255, 0.5)');
    root.style.setProperty('--box-shadow', '0px 0px 12px rgba(160, 192, 255, 0.5)');

    root.style.setProperty('--bg-jumbo', 'rgba(103, 154, 255, 0.2');
}


// Funzione per gestire l'apertura e la chiusura del collapse al passaggio del mouse
function toggleCollapse(id) {
    var element = document.getElementById(id);
    var isCollapsed = element.classList.contains('show');
    if (isCollapsed) {
        element.classList.remove('show');
    } else {
        element.classList.add('show');
        element.classList.add('hover-animation');
    }
}
