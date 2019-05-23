import filterImages from '../src/filter-images.js';

const test = QUnit.test;

QUnit.module('filter images');

const images = [
    {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    },
    {
        'url': 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
        'title': 'Rhino Family',
        'description': 'Mother (or father) rhino with two babies',
        'keyword': 'rhino',
        'horns': 2
    },
    {
        'url': 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
        'title': 'Unicorn Head',
        'description': 'Someone wearing a creepy unicorn head mask',
        'keyword': 'unicorn',
        'horns': 1
    }
];

test('filter image titles', assert => {
    // arrange
    const filter = {
        text: 'UniWhal',
        horns: '',
    };
    const filtered = filterImages(images, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1 
    }]);
});

test('filter image by horn number', assert => {
    // arrange
    const filter = {
        horns: 2,
        text: '',
    };
    const filtered = filterImages(images, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'url': 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
        'title': 'Rhino Family',
        'description': 'Mother (or father) rhino with two babies',
        'keyword': 'rhino',
        'horns': 2
    }]);
});

test('filter image by both horn number and title', assert => {
    // arrange
    const filter = {
        horns: 2,
        text: 'rhino',
    };
    const filtered = filterImages(images, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'url': 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
        'title': 'Rhino Family',
        'description': 'Mother (or father) rhino with two babies',
        'keyword': 'rhino',
        'horns': 2
    }]);
});

test('filter image by keyword', assert => {
    // arrange
    const filter = {
        horns: '',
        text: 'narwhal',
    };
    const filtered = filterImages(images, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    }]);
});

test('filter image by description', assert => {
    // arrange
    const filter = {
        horns: '',
        text: 'nuzzling',
    };
    const filtered = filterImages(images, filter);
    // act
    // assert
    assert.deepEqual(filtered, [{ 
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    }]);
});