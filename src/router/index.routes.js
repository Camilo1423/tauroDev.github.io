import {pages} from '../controller/index'

let appSpa = document.querySelector('#App')

const router = (route) => {
    appSpa.innerHTML = '';
    switch(route) {
        case '#/': 
            return appSpa.appendChild(pages.home())
        case '#/aboutUs':
            return appSpa.appendChild(pages.about())
        case '#/projects':
            return appSpa.appendChild(pages.projects())
        case '#/contactUs':
            return console.log('ContactUs');
        default:
            return console.log('Not found');
    }
}

export {router};