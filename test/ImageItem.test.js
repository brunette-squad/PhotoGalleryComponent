import ImageItem from '../src/component/ImageItem.js';
const test = QUnit.test;
QUnit.module('ImageItem');

test('image item template', assert => {
    // arrange
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns'
    };

    const expected = /*html*/ `
    <li>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="A unicorn and a narwhal nuzzling their horns">
    <h3 class="title">UniWhal</h3>
    </li>
    `;
    // act
    const imageItem = new ImageItem({ image });
    const html = imageItem.renderTemplate();
    // assert
    assert.htmlEqual(html, expected);
});