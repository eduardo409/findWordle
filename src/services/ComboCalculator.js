
// given a list of valid words and a list of strings 
// determine if the string is a valid word 

//can we use a tier data structure??
var Trie = require('./Trie');
var Tile = require('../models/Tile');


class ComboCalculator {
    // todo can an array hold all ~13k words?
    // can this cause an efficiency problem??
    constructor(words) {
        this.dictionary = new Trie(words);
    }
    // given a wordleAlphabet object generate a list of possible wordles
    genListOfCombination(listOfAlphabets) {
        // create valid combination 
        let listOfWordObjs = [];
        const colomn1 = listOfAlphabets[0];
        const colomn2 = listOfAlphabets[1];
        const colomn3 = listOfAlphabets[2];
        const colomn4 = listOfAlphabets[3];
        const colomn5 = listOfAlphabets[4];

        for (let char1 of colomn1) {
            let prefix = char1;
            for (let char2 of colomn2) {
                prefix = prefix.concat(char2);
                if (this.doesNotStartWithPrefix(prefix)) {  prefix = char1; continue }
                for (let char3 of colomn3) {
                    prefix = prefix.concat(char3);
                    if (this.doesNotStartWithPrefix(prefix)) {prefix = char1 + char2; continue }
                    for (let char4 of colomn4) {
                        prefix = prefix.concat(char4);
                        if (this.doesNotStartWithPrefix(prefix)) {prefix = char1 + char2 + char3; continue }
                        for (let char5 of colomn5) {
                            let word = prefix.concat(char5);
                            if (!this.containsWord(word)) {  prefix = char1 + char2 + char3 + char4; continue }
                            listOfWordObjs.push(this.createWordObject(word));
                            prefix = char1 + char2 + char3 + char4;
                        }
                        prefix = char1 + char2 + char3;
                    }
                    prefix = char1 + char2;
                }
                prefix = char1;
            }
        }
        return listOfWordObjs;
    }

    doesNotStartWithPrefix(prefix) {
        return !this.dictionary.startsWith(prefix)
    }
    containsWord(word) {
        return this.dictionary.search(word)
    }
    createWordObject(word) {
        let row = []
        let id = 0;
        for (let char of word) {
            let tile = new Tile(id++);
            tile.setChar(char);
            row.push(tile)
        }
        return row;
    }
}

module.exports = ComboCalculator;