import views from '../views/homePage.html'

export default () => {

    const divElement = document.createElement('main');
    document.title = 'Tauro Dev | Home'
    divElement.innerHTML = views;

    return divElement
}