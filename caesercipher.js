function caesercipher(string, shift) {

    let encrypted = ''
    for (let index=0; index<string.length; index++) {
        let charCode = string.charCodeAt(index);

        if (charCode >= 97 && charCode <= 122) {
            charCode += shift;
            charCode > 122 ? charCode = charCode - 26: charCode

        } else if (charCode >= 65 && charCode <= 90) {
            charCode += shift;
            charCode > 90 ? charCode = charCode - 26: charCode

        }
        
        encrypted += String.fromCharCode(charCode)
    }
    return encrypted
}

let bib = caesercipher('bob',3)
console.log(bib)
module.exports = caesercipher;