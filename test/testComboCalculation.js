var assert = require('Chai').assert;
var ComboCalculator = require( '../src/services/ComboCal');
var listOfValidWords = require('../src/assets/listOfWords')

describe('Combo Calculation Class', function () {
    var calculator;
    describe('Constructor', function () {
        it('should initialize ComboCal object', function () {
            calculator = new ComboCalculator(listOfValidWords);         
        });
    });

    describe('#validWords', function () {
        it('should return list of valid words', function () {
            assert.equal(calculator.validWords().length, 12947, '== length of valid words');
        });
    });
});