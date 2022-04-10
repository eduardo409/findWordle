var Tile = require('../models/Tile');

export class GameBoard {
    constructor() {
        this.NUMROWS = 6;
        this.NUMCOLS = 5;
        // Max number of charters the board can hold
        this.MAXNUMOFCHAR = this.NUMCOLS * this.NUMCOLS

        // tile colors 
        this.COLOR_PRESENT = "#b59f3b"
        this.COLOR_ABESNT = "#3a3a3c"
        this.COLOR_CORRECT = "#538d4e"
        this.COLOR_EMPTY = "#121213"

        // grid 
        this.board = [];
        // insertion value is always 1 ahead of current character
        this.insertion = 0
        this.idToRowCol = []
        this.initBoard()

        // wordle combinations 
        this.MAXWORDLEN = this.NUMCOLS;
        this.ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        this.wordle = [];
        this.currentGameAlphabet =  this.ALPHABET;
        this.numberOfCombinations;
        this.intWordleElements();
        this.calculateCombinationCount();

    }
    intWordleElements() {
        for (let i = 0; i < this.MAXWORDLEN; i++) {
            this.wordle.push(this.ALPHABET)
        }
    }

    calculateCombinations() {
        // this.wordle.forEach(s=>{

        // })
    }
    // returns the total number of possible combination
    calculateCombinationCount() {
        console.log("calculate combinations count")
        let value = 1;
        console.log(this.wordle)
        this.wordle.forEach(el => {
            console.log(el.length)
            // console.log(index)
            value = el.length * value
        })
        this.numberOfCombinations = value
    }

    initBoard() {
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
        const column = j;
        let currentTileState = this.board[i][j].getState();
        let tileValue = this.board[i][j].getChar();
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
            this.updateWordleSet(column, tileValue, newState)

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
            const state = "empty"
            this.insertion--
            const { i, j } = this.idToRowCol[this.insertion];
            const column = j;
            const tileValue = this.board[i][j].getChar();
            this.updateWordleSet(column, tileValue, state)
            this.updateBoardTileState(i, j, state)
            this.board[i][j].setChar("")
        }
    }
    enterEvent() {
        console.log("find event");
    }
    sortWordleSet(){
        this.wordle.forEach((element, idx) => {
            this.wordle[idx] = element.split('').sort().join('');
        });
    }
    resetWordleChar(value) {
        if(!this.currentGameAlphabet.includes(value)){
            this.currentGameAlphabet = this.currentGameAlphabet.concat(value);
        }
        for (let i = 0; i < this.MAXWORDLEN; i++) {
            const indexAlphabet = this.wordle[i];
            console.log("index alph: " + indexAlphabet.length)
            if (indexAlphabet.length != 1 && !indexAlphabet.includes(value)) {
                this.wordle[i] = indexAlphabet.concat(value);
            }
        }
    }
    removeCharFromWordle(index, value) {
        // remove character from every wordle index
        this.currentGameAlphabet = this.currentGameAlphabet.replaceAll(value, "");
        this.wordle.forEach((element, idx) => {
            console.log(`removeCharFromWordle: idx: ${idx} index: ${index} element length ${element}` )
            if(idx === index && element.length == 1){
                console.log("updating index to use game alphabet")
                this.wordle[idx] = this.currentGameAlphabet;
            }else if(element.length != 1) {
                this.wordle[idx] = element.replaceAll(value, "");
            }
        });
    }

    removeCharFromIndex(index, value){
        this.wordle[index] = this.wordle[index].replaceAll(value, "");
    }

    updateWordleAlphabet(index, alph){
        this.wordle[index] = alph;
    }

    updateWordleSet(index, value, state) {
        console.log("updating wordle set, before: " + this.wordle)
        // resent wordle with value, this make it easier to update state in the next piece of logic
        // this will also handle "empty" state 
        this.resetWordleChar(value);

        switch (state) {
            case "absent":
                console.log("absent state");
                this.removeCharFromWordle(index,value);
                break;
            case "present":
                console.log("present state");
                this.removeCharFromIndex(index,value)
                break;
            case "correct":
                console.log("correct state");
                this.updateWordleAlphabet(index, value)
                break;
        }

        this.sortWordleSet()
        console.log("updating wordle set, after: " + this.wordle)
    }
    // todo update function name -> handle new character input 
    charEvent(value) {
        console.log("char event - updating wordle")
        const state = "absent"
        const { i, j } = this.idToRowCol[this.insertion];
        this.board[i][j].setChar(value)
        const column = j;
        this.updateBoardTileState(i, j, state)
        this.updateWordleSet(column, value, state)
        this.insertion++
    }
    updateBoardTileValue(value) {
        if (value == "backspace") {
            this.backspaceEvent();

        } else if (value == "find") {
            this.enterEvent();
        } else if (this.insertion < this.MAXNUMOFCHAR) {
            this.charEvent(value)
            console.log("hihihi")
        }
        console.log('insertion(after event): ' + this.insertion)
        console.log(value);
    }
}