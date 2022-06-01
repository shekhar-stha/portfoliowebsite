const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.querySelector('nav');

openNav.addEventListener('click',()=>{
    nav.classList.toggle('open');
})

closeNav.addEventListener('click',()=>{
    nav.classList.remove('open');
})

function openPdf(){
    window.open('C:\Users\DeLL\Desktop\Portfolio\Shekhar (1).pdf');
}

const navClose =  document.getElementById('navClose').childNodes;

for(var i=0; i<navClose.length; i++){
    navClose.classList.remove('open');
}
