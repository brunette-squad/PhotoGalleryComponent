import Component from './Component.js';

class Filter extends Component { 

    render() { 
        const dom = this.renderDOM();
        const text = dom.querySelector('#text');
        const digits = dom.querySelector('#digits');
        const inputs = dom.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                console.log(digits.value);
                this.props.onFilter({
                    text: text.value,
                    digits: digits.value
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
            <input id="digits" name="number" placeholder="search by # of horns">
        </section>
        `;
    }
}

export default Filter;