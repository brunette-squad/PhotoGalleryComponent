import Component from './Component.js';

class Filter extends Component { 

    render() { 
        const dom = this.renderDOM();
        const text = dom.querySelector('#text');
        const horns = dom.querySelector('#horns');
        const inputs = dom.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.props.onFilter({
                    text: text.value,
                    horns: horns.value
                });
            });

        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <section class ="filter-section">
            <span class="search">👓</span>
            <input id="text" name="letter" placeholder="search by title">
            <input id="horns" name="number" placeholder="search by # of horns">
        </section>
        `;
    }
}

export default Filter;