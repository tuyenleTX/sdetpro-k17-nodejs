const giveStr = `Hello ban, tui ten Teo, ban cung cung ten Teo luon ah?`;

//Hello: 1, 
//ban: 2,
//Teo: 1

const groupMap = groupWordsUsingMap(giveStr);
console.log(groupMap);

function groupWordsUsingMap(giveStr) {
    let countWords = new Map();
    let individualWords = giveStr.replace(/,/gi,"").split(" ");
    console.log(individualWords);

    for (const word of individualWords) {
        if(countWords.has(word)) {
            countWords.set(word, countWords.get(word) + 1 );
        } else {
            countWords.set(word, 1);
        }
    }
    return countWords;
}