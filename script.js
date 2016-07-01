function Dialog(title,
    { width, height, draggable } = {}) {

    this.title = title || 'Hello';
    this.width = width || 200;
    this.height = height || 300;
    this.draggable = draggable || true;
}

var dialogDefault = new Dialog('Default Dialog', {
    draggable: false
});

console.log('dialogDefault',
    JSON.stringify(dialogDefault, null, 2));