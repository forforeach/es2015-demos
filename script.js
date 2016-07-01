function addTag(tag) {
    console.log(tag + ' was added');
}

function addTags() {
    var tags = Array.prototype.slice.call(arguments);

    tags.forEach(function (tag) {
        addTag(tag);
    });
}

addTags('new', 'cool', 'feature');