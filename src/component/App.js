import Component from '../component/Component.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        return dom;
    }

    renderTemplate(){
        return /*html*/`
            <main>
                <ul id="photos">
                <li>CATS</li>
                </ul>
            </main>
        `;
    }
}

export default App;