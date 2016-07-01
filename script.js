function addTag(tag) {
    console.log(tag + ' was added');
}

function addTags() {
    var args = Array.prototype.slice.call(arguments);

    args.forEach(function (tag) {
        addTag(tag);
    });
}

addTags('new', 'cool', 'feature');