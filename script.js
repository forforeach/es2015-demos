function addTag(tag) {
    console.log(tag + ' was added');
}

function addTags(...tags) {
    tags.forEach(function (tag) {
        addTag(tag);
    });
}

addTags('new', 'cool', 'feature');