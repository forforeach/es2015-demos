function Dialog(title, options) {
    this.title = title;
    this.width = options.width;
    this.height = options.height;
    this.draggable = options.draggable;
}

var dialog = new Dialog('Hello', {
    width: 100,
    height: 200,
    draggable: false
});

var dialogDefault = new Dialog('Hello');