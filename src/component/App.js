import Component from './Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from '../../data/images.js';
import AddImage from './AddImage.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addImage = new AddImage({
            onAdd: (newImage) => {
                images.unshift(newImage);
                imageList.update({ images });
            }
        });

        const addImageDOM = addImage.render();
        main.appendChild(addImageDOM);

        const imageList = new ImageList({ images });
        const imageListDOM = imageList.render();
        main.appendChild(imageListDOM);
        return dom;
    }

    renderTemplate(){
        return /*html*/`
        <div>
            <main>
                <ul id="photos">
                </ul>
            </main>
        </div>
        `;
    }
}

export default App;