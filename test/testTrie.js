var assert = require('Chai').assert;
var Trie = require('../src/services/Trie');
var listOfValidWords = require('../src/assets/listOfWords')

// var listOfValidWords = require('../src/assets/listOfWords')

describe('Trie Class', function () {
    var trie;

    describe('Trie(words) constructor', function () {
        it('should initialize Trie(words) object', function () {
            trie = new Trie(listOfValidWords);
            assert.equal(trie.size, listOfValidWords.length, "trie shoud be size of listOfValidWords")
        });
    });

    describe('Insert()', function () {
        it('should insert values into Trie', function () {
            trie.insert("AAAA");
            trie.insert("prefixsufix");
            trie.insert("CAT");
            assert.equal(trie.size, listOfValidWords.length + 3, '== successfully inserted words');
        });
    });

    describe('Search(word)', function () {
        it('should search Trie', function () {
            let randomValidWord = listOfValidWords[Math.floor(Math.random() * listOfValidWords.length)]
            assert.equal(trie.search("AAAA"), true, '== successfully searched words');
            assert.equal(trie.search("CAT"), true, '== successfully searched words');
            assert.equal(trie.search("NOTREALWORD"), false, '== successfully searched words');
            assert.equal(trie.search(randomValidWord), true, '== successfully searched words');
        });
    });

    describe('startsWith(prefix)', function () {
        it('should find prefix in Trie', function () {
            assert.equal(trie.startsWith("pre"), true, '== successfully checked if prefix exist');

        });
    });

    describe('startsWith(prefix)', function () {
        it('should not find prefix in Trie', function () {
            assert.equal(trie.startsWith("ppre"), false, '== successfully checked if prefix exist');

        });
    });

});