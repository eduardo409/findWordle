export class GameBoard {
    constructor(Tile) {
        this.NUMROWS = 6;
        this.NUMCOLS = 5;
        // Max number of charters the board can hold
        this.MAXNUMOFCHAR = 5 * 6
        // tile colors 
        this.COLOR_PRESENT = "#b59f3b"
        this.COLOR_ABESNT = "#3a3a3c"
        this.COLOR_CORRECT = "#538d4e"
        this.COLOR_EMPTY = "#121213"
        this.board = [];
        this.insertion = 0
        this.idToRowCol = []
        this.initBoard(Tile)

    }
    initBoard(Tile) {
        // create 6X5 tiles
        for (let i = 0; i < this.NUMROWS; i++) {
            let row = [];
            for (let j = 0; j < this.NUMCOLS; j++) {
                let id = this.idToRowCol.length
                console.log(id)
                row.push(new Tile(id));
                this.idToRowCol.push({ i, j })
            }
            this.board.push(row);
        }
    }
    tileClicked(id) {
        const { i, j } = this.idToRowCol[id];
        let currentTileState = this.board[i][j].getState();
        let color = ""
        let newState = ""
        // this will avoid changing the color of tile without characters
        if (parseInt(id) >= this.insertion) { return }

        if (currentTileState == "absent") {
            newState = "present";
        } else if (currentTileState == "present") {
            newState = "correct";
        } else if (currentTileState == "correct") {
            newState = "absent";
        }
        if (color != null && newState != "") {
            this.updateBoardTileState(i, j, newState)

        }

    }

    updateBoardTileState(i, j, state) {
        let color;
        if (state == "empty") {
            color = this.COLOR_EMPTY;
        }
        else if (state == "absent") {
            color = this.COLOR_ABESNT;
        } else if (state == "present") {
            color = this.COLOR_PRESENT;
        } else if (state == "correct") {
            color = this.COLOR_CORRECT;
        }
        this.board[i][j].setState(state)
        this.board[i][j].setColor(color)
    }
    backspaceEvent() {
        if (this.insertion > 0) {
            console.log("backspace event");
            this.insertion--
            const { i, j } = this.idToRowCol[this.insertion];
            this.updateBoardTileState(i, j, "empty")
            this.board[i][j].setChar("")
        }
    }
    enterEvent() {
        console.log("enter event");
    }
    charEvent(value) {
        console.log("char event")
        const { i, j } = this.idToRowCol[this.insertion];
        this.board[i][j].setChar(value)
        this.updateBoardTileState(i, j, "absent")
        this.insertion++
    }
    updateBoardTileValue(id, value) {
        if (value == "backspace") {
            this.backspaceEvent();

        } else if (value == "enter") {
            this.enterEvent();
        } else if (this.insertion < this.MAXNUMOFCHAR) {
            this.charEvent(value)
        }
        console.log('insertion(after event): ' + this.insertion)
        console.log(value);
    }





}