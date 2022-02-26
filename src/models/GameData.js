export class GameData{
    constructor(){
        console.log("inside game data")
        this.MAXWORDLEN = 5;
        this.ALPHABET = "abcdefghijklmnopqrstuvwxyz";
        this.wordle = [];
        this.numberOfCombinations;
        this.intWordleElements();
        this.calculateCombinations();
    }
    intWordleElements(){
        for(let i = 0; i<this.MAXWORDLEN; i++){
            this.wordle.push(this.ALPHABET)
        }
    }
    // returns the total number of possible combination
    calculateCombinations(){
        console.log("calculate combinations")
        let value = 1;
        console.log(this.wordle)
        this.wordle.forEach(el=>{
            console.log(el.length)
            // console.log(index)
            value = el.length * value 
        })
        this.numberOfCombinations = value
    }
}