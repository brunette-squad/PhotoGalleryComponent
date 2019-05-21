import Component from './Component.js';

class ImageList extends Component {
    render() {

        const list = this.renderDOM();
        
        // move const images line back to here after forEach
        
        return list;
    }
    
    renderTemplate() {
        const images = this.props.images;
        return /*html*/ `
            <ul id="photos">
                <li>${images.length}</li>
            </ul>
        `;
    }
}

export default ImageList;