function capitalize(capitalizeString) {
    return capitalizeString[0].toUpperCase() + capitalizeString.slice(1);
    
    /* let newString = capitalizeString.split("").map((letter,index) => {
        index === 0 ? letter = letter.toUpperCase() : letter; 
        return letter;
    }) 
    return newString.join("")
    */
}

module.exports = capitalize