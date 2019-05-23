function filterImages(images, filter) {
    const lowerCaseFilter = filter.text.toLowerCase();
    return images.filter(image => {

        const lowerCaseTitle = image.title.toLowerCase();
        const hasTitle = lowerCaseTitle.includes(lowerCaseFilter);

        const hornNumber = image.horns;
        const hasHorns = !filter.horns || hornNumber >= filter.horns;
    
        return hasTitle && hasHorns;
    });

}
export default filterImages;