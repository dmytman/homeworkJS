console.log('task-5');

const checkForSpam = function (message) {
    let aray = message.toLowerCase();
    if (aray.includes('spam') || aray.includes('sale')) {
        console.log('true');
        
    } else {
        console.log('false')
    }
    return aray;
}


console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 