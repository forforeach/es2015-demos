function TagsVM(entity, record) {
    this.entity = entity;
    this.record = record;
    this.tags;
}

TagsVM.prototype.loadTags = function (...tags) {
    setTimeout(function () {
        this.tags = ['async', 'tags', 'grabbed'];
    }, 1000);
}
var tagsVM = new TagsVM(1, 1);
tagsVM.loadTags();


setTimeout(function () {
    console.log(tagsVM.tags);
}, 1500);