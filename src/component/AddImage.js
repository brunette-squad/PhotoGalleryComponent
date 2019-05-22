import Component from './Component.js';

class AddImage extends Component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newImage = {
                url: formData.get('url'),
                title: formData.get('title'),
                description: formData.get('description')
            };

            onAdd(newImage);

            form.reset();
            document.activeElement.blur();  
        });

        return form;
    }
    renderTemplate() {
        return /*html*/`
            <form>
                <label>URL:<input name="url"></label>
                <label>Title:<input name="title"></label>
                <label>Description:<input name="description"></label>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddImage;
