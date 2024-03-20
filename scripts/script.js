//Script for the special effects added when you click a navbar button.
const navSelecEls = document.querySelectorAll('.nav_select');

navSelecEls.forEach(navSelecEl=>{
    navSelecEl.addEventListener('click',() => {
        document.querySelector('.btn-active')?.classList.remove('btn-active');
        navSelecEl.classList.add('btn-active');
    });
    
});