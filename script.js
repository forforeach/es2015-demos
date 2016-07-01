function Dialog(title, options = {}) {

    let defaults = {
        width: 200,
        height: 300,
        draggable: true
    };

    let settings = Object.assign({}, defaults, options);

    this.title = title;
    this.width = settings.width;
    this.height = settings.height;
    this.draggable = settings.draggable;
}

var dialogDefault = new Dialog('Default Dialog', {
    draggable: false
});

console.log('dialogDefault',
    JSON.stringify(dialogDefault, null, 2));