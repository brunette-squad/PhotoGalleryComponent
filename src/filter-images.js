function filterImages(images, filter) {
    const text = filter.text.toLowerCase();
    return images.filter(image => {

        const title = image.title.toLowerCase();
        const description = image.description.toLowerCase();

        const hasHorns = !filter.horns || image.horns >= filter.horns;
        const hasText = !text 
            || title.includes(text) 
            || description.includes(text);
        

    
        return hasText && hasHorns;
    });

}
export default filterImages;