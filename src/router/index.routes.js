import {pages} from '../controller/index'

let appSpa = document.querySelector('#App')

const router = (route) => {
    appSpa.innerHTML = '';
    switch(route) {
        case '#/': {
            return appSpa.appendChild(pages.home())
        }
        case '#/aboutUs':
            return appSpa.appendChild(pages.about())
        case '#/services':{
            return console.log('About');
        }
        case '#/contactUs':
            return console.log('ContactUs');
        case '#/services/productOne': {
            return console.log('About');
        }
        default:
            return console.log('Not found');
    }
}

export {router};