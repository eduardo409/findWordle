export class Tile {
    state;
    color;
    char;
    row;
    col;
    id;

    constructor(id) {
        this.state = "absent";
        this.char = "";
        this.id = id;
        this.color = "#121213"
    }

    getId() {
        return this.id;
    }
    setColor(hex) {
        this.color = hex;
    }

    setState(state) {
        this.state = state;
    }

    setChar(char) {
        this.char = char;
    }

    getColor() {
        return this.color;
    }

    getChar() {
        return this.char;
    }
    getState() {
        return this.state;
    }


}