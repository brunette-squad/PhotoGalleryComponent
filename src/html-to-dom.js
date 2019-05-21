function htmlToDOM(html) {
    //CREATE HTML TEMPLATE ELEMENT
    const template = document.createElement('template');
    //set the template's
    template.innerHTML = html;
    const content = template.content;
    const firstElementChild = content.firstElementChild;

    return firstElementChild;
}
export default htmlToDOM;