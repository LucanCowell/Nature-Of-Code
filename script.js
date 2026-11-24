class Walker {
    constructor() {
        
        this.x = width / 2
        this.y = height / 2
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }
}