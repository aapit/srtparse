var fs = require('fs');
var parser = require('subtitles-parser');
var srt = fs.readFileSync('narcosS01E01_en.srt','utf8');
var sbf = require('./lib/sortbyfrequency.js');
var ignore = require('./lib/ignore.js');

var subtitles = parser.fromSrt(srt);

var allWords = [];

for (let subtitle of subtitles) {
    var words = subtitle.text.split(/[\s,.!?"\\-]+/);
    for (let word of words) {
        word = word.toLowerCase();
        if (ignore.matches(word)) {
            allWords.push(word);
        }
    }

    //console.log(subtitle.text);
    //s = JSON.parse(subtitle);
    //output.push(s.text);
}

sortedWords = sbf.sortByFrequency(allWords);

for (let w of sortedWords) {
    process.stdout.write(w + " – ");
}

const execSync = require('child_process').execSync;
//code = execSync('say -v Alva "' + sortedWords.join(' ') + '"');
code = execSync('say -v Daniel -r 120 "' + sortedWords.join(' ') + '"');

//console.output(output.join("\n"));
