/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const brailleMap = new Map(englishToBrailleLiteralSet);
function convertFunction() {
  document.getElementById('targetLangText').innerHTML = document.getElementById('sourceLangText')
    .value
    .split('')
    .map(element => brailleMap.get(element))
    .join('');
}

document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertFunction);
