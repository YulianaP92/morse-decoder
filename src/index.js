const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let mes = '';
    Object.prototype.getKey = function (value) {
        for (var key in this) {
            if (this[key] == value) {
                return key;
            }
        }
        return null;
    };

    let allImgs = [].slice.call(expr);
    allImgs.map(function (letter) {
        let n = MORSE_TABLE.getKey(letter);
        let arr = [].slice.call(n);
        let zero='';
        let k = '';
        arr.map(function (char) {
            
            if (char === '-') {
                k += '11'
            }
            if (char === '.') {
                k += '10'
            }
            let count = 10 - k.length;
            zero = '0'.repeat(count);
          
        });
        mes = mes+zero + k;
    });
    return mes;
}

module.exports = {
    decode
}