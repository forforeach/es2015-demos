class Dialog {
    constructor(title,
        { width, height, draggable } = {}) {

        this.title = title;
        this.width = width;
        this.height = height;
        this.draggable = draggable;
    }

    open() {
        console.log(this.title,
            JSON.stringify(dialog, null, 2));
    }
}

class FancyDialog extends Dialog {
    constructor(title, subtitle,
        { width, height, draggable, rotate } = {}) {

        super(title, { width, height, rotate });

        this.subtitle = subtitle;
        this.rotate = rotate;
    }

    open() {
        super.open();
        if (this.rotate) {
            this.rotateDialog();
        }
    }
    rotateDialog() {
        console.log('Rotating...');
    }
}

var dialog = new FancyDialog('My fancy dialog', 'Great new features', {
    width: 100,
    height: 200,
    draggable: false,
    rotate: true
});

dialog.open();