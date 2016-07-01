function TagsVM(entity, record) {
    this.entity = entity;
    this.record = record;
    this.tags;
}

TagsVM.prototype.loadTags = function (...tags) {
    setTimeout(function () {
        this.tags = ['async', 'tags', 'grabbed'];
    });
}
var tagsVM = new TagsVM(1, 1);
tagsVM.loadTags();

console.log(tagsVM.tags);