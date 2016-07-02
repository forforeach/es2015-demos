function Dialog(title,
    { width, height, draggable } = {}) {

    this.title = title;
    this.width = width;
    this.height = height;
    this.draggable = draggable;
}

Dialog.prototype.open = function () {
    console.log(this.title,
        JSON.stringify(dialog, null, 2));
};

var dialog = new Dialog('My dialog', {
    width: 100,
    height: 200,
    draggable: false
});

dialog.open();