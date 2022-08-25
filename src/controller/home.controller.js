import views from '../views/homePage.html'

export default () => {

    const divElement = document.createElement('div');
    document.title = 'Tauro Dev | Home'
    divElement.innerHTML = views;

    return divElement
}