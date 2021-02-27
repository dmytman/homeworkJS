console.log('task-3');

const findLongestWord = function (string) {
    let aray = string.split(' ');
    let a = aray[0];
    for (let i = 0; i < aray.length; i += 1) {
        if (aray[i].length > a.length) {
            a = aray[i];
        }
    }
    return a
};



console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 