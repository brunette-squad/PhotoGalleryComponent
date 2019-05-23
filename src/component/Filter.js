import Component from './Component.js';

class Filter extends Component { 

    render() { 
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        input.addEventListener('input', () => {
            this.props.onFilter({
                text: input.value
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
        <section class ="filter-section">
            <span class="search">👓</span>
            <input class="filter" name="letter" placeholder="search by title">
            <input class="filter" name="number" placeholder="search by # of horns">
        </section>
        `;
    }
}

export default Filter;