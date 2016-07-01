function addTag(tag) {
    console.log(tag + ' was added');
}

function addTags(...tags) {
    tags.forEach(function (tag) {
        addTag(tag);
    });
}

function getTags(entity, id, callback) {
    setTimeout(function () {
        callback(['async', 'tags', 'grabbed']);
    });
}

getTags(1, 1, function (tagsArray) {
    addTags(tagsArray);
});