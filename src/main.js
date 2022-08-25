/* ================= CSS ================= */
import './main.css';

/* ================= ROUTER ================= */
import {router} from './router/index.routes'


router('#/')
window.addEventListener('hashchange', () => {
    router(window.location.hash)
})

