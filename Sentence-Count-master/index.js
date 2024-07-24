// The sentence
const words = document.querySelector(".letter").textContent
const vowel_list = {
    a: "a",
    i: 'i',
    e: 'e',
    o: 'o',
    u: 'u'
}

// The function
function letters (words) {
    let wordLengthOf = 0;
    let numOfWords = 1;
    let numOfVowels = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === ' ') {
            numOfWords++
        }
        if (words[i] in vowel_list) {
            numOfVowels++
        }
        wordLengthOf++
    }
    return {
        wordLengthOf,
        numOfWords,
        numOfVowels
    }
}

//The result
console.log("The sentence contains " + JSON.stringify(letters(words)))

