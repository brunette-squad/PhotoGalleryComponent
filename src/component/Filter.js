import Component from './Component.js';

class Filter extends Component { 

    // render() { 
    //     const dom = this.renderDOM();
    //     return dom;
    // }
    renderTemplate() {
        return /*html*/ `
        <section class ="filter-section">
            <input class="filter" name="filter">
            <span class="search">👓 Search by title or number of horns...</span>
        </section>
        `;
    }
}

export default Filter;