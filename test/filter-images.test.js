// import

const test = QUnit.test;
const only = QUnit.only;

QUnit.module('filter images');

function filterImages(images, filter) {
    const lowerCaseFilter = filter.title.toLowerCase();
    return images.filter(image => {
        // const lowerCaseFilter = image.filter.toLowerCase();
        // const hasText = lowerCaseFilter.includes.toLowerCase();
        
        const lowerCaseTitle = image.title.toLowerCase();
        const hasTitle = lowerCaseTitle.includes(lowerCaseFilter);

        // const lowerCaseKeyword = image.keyword.toLowerCase();
        // const hasKeyword = lowerCaseKeyword.includes(lowerCaseFilter);
        

        const hornNumber = image.horns;
        const hasHorns = !filter.horns || hornNumber >= filter.horns;
    
        return hasTitle && hasHorns;
    });

}

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
        title: 'UniWhal',
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
        title: '',
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

test('filter image by keywords', assert => {
    // arrange
    const filter = {
        horns: '',
        title: 'rhino',
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