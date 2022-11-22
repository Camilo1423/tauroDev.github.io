/* ================= CSS ================= */
import './main.css';

/* ================= ROUTER ================= */
import {router} from './router/index.routes'


router('#/')
window.addEventListener('hashchange', () => {
    router(window.location.hash)
})

//   scroll up
const scrollup = () => {
    const scrollup = document.getElementById('scrollup');
    (scrollY >= 300) ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)


