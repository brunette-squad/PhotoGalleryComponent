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
        <p>Search by title or number of horns...</p>
            <input class="filter" name="filter">
            <span class="search">👓</span>
        </section>
        `;
    }
}

export default Filter;