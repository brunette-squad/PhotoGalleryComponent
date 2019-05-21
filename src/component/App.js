import Component from './Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const imageList = new ImageList({  }); //TODO: confirm photos vs images?
        const imageListDOM = imageList.render();
        main.appendChild(imageListDOM);
        return dom;
    }

    renderTemplate(){
        return /*html*/`
        <div>
            <main>
                <ul id="photos">
                    <li>CATS</li>
                </ul>
            </main>
        </div>
        `;
    }
}

export default App;