
// given a list of valid words and a list of strings 
// determine if the string is a valid word 

//can we use a tier data structure??


class ComboCalculator{
    // todo can an array hold all ~13k words?
    // can this cause an efficiency problem??
    constructor(words){
        this.ListOfValidWords = words;
    }

    validWords(){
        return this.ListOfValidWords;
    }
}

module.exports = ComboCalculator;
