const themechnge = () => {
    const bd = document.querySelector('.body')
    bd.classList.toggle('body1');

    const btn = document.querySelector('.light')
    btn.classList.toggle('light1')

    const sun = document.querySelector('.sun')
    sun.classList.toggle('sun1')
}

const loader = document.querySelector('.pre-loader')
window.addEventListener('load', ()=>{
    loader.classList.add("complet-loader");
})