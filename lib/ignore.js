var fs = require('fs');
var commonWords = fs.readFileSync('./lib/ignore/20k.txt','utf8');

module.exports = {
    words: commonWords.split("\n"),

    matches: function(word) {
        return this.words.indexOf(word) === -1;
    }
};
