import views from '../views/about.html'

export default () => {

    const divElement = document.createElement('main');
    document.title = 'Tauro Dev | About Us'
    divElement.innerHTML = views;

    return divElement
}