var assert = require('Chai').assert;
var ComboCalculator = require('../src/services/ComboCalculator');
var listOfValidWords = require('../src/assets/listOfWords')
var Tile = require('../src/models/Tile');

describe('Combo Calculation Class', function () {
    var calculator;
    describe('Constructor(listOfValidWords)', function () {
        it('should initialize ComboCal object', function () {
            calculator = new ComboCalculator(listOfValidWords);
            assert.equal(calculator.dictionary.size, listOfValidWords.length, "trie shoud be size of listOfValidWords")

        });
    });

    describe('createWordObject(string)', function () {
        it('should return list of Tile Objects', function () {
            assert.equal(calculator.createWordObject("Hello").length, 5, '== length of Tile list');
            assert.equal(calculator.createWordObject("").length, 0, '== length of Tile list');
        });
    });

    describe('genListOfCombination(listOfAlphabets)', function () {
        it('should return list of Tile Objects', function () {
            let randomValidWord = listOfValidWords[Math.floor(Math.random() * listOfValidWords.length)]
            assert.equal(calculator.genListOfCombination(randomValidWord).length, 1, '== length of Tile list');
        });
    });

    describe('genListOfCombination(listOfAlphabets)', function () {
        it('should return list of length 2', function () {
            // sural suras surah surds seral seeds yerds yeeds yeesh
            let listOfAlphabets = ["sy", "ue", "re", "ads", "lsh"]
            let listofwordObjects = calculator.genListOfCombination(listOfAlphabets)
            console.log(listofwordObjects)
            assert.equal(listofwordObjects.length, 5, '== length of Tile list');
        });
    });

    describe('genListOfCombination(listOfAlphabets)', function () {
        it('should return empty list of Tile Objects', function () {
            assert.equal(calculator.genListOfCombination("kdjsfhjksdh").length, 0, '== length of Tile list');
            // todo add stub/spy object to verify startsWith(prefix) is only called appropriate number of times 
        });
    });
});