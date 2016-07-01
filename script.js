function TagsVM(entity, record) {
    this.entity = entity;
    this.record = record;
    this.tags;
}

TagsVM.prototype.loadTags = function (...tags) {
    setTimeout(() => {
        this.tags = ['async', 'tags', 'grabbed'];
        console.log(window.tagsVM.tags);
    });
}
var tagsVM = new TagsVM(1, 1);
tagsVM.loadTags();