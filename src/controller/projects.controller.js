import views from '../views/projects.html'

export default () => {

    const divElement = document.createElement('main');
    document.title = 'Tauro Dev | Projects'
    divElement.innerHTML = views;

    return divElement
}