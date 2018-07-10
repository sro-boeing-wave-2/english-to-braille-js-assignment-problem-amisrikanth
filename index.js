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
  const str = document.getElementById('sourceLangText').value;
  const resultArray = [];
  for (let i = 0; i < str.length; i += 1) {
    resultArray.push(brailleMap.get(str[i]));
  }
  document.getElementById('targetLangText').innerHTML = resultArray.join('');
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertFunction);
