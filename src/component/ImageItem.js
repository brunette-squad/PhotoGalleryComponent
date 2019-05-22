import Component from './Component.js';

class ImageItem extends Component {
    renderTemplate() {
        const image = this.props.image;
        return /*html*/ `
        <li>
        <img src="${image.url}" alt="${image.description}">
        <h3 class="title">${image.title}</h3>
        </li>
        `;
    }
}

export default ImageItem;