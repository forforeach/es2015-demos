function Dialog(title, options = {}) {
    this.title = title;
    this.width = options.width;
    this.height = options.height;
    this.draggable = options.draggable;
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