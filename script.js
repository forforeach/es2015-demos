function Dialog(title,
    { width, height, draggable } = {}) {

    this.title = title;
    this.width = width;
    this.height = height;
    this.draggable = draggable;
}

var dialog = new Dialog('Dialog', {
    width: 100,
    height: 200,
    draggable: false
});

console.log('dialog',
    JSON.stringify(dialog, null, 2));

var dialogDefault = new Dialog('Default Dialog');

console.log('dialogDefault',
    JSON.stringify(dialogDefault, null, 2));