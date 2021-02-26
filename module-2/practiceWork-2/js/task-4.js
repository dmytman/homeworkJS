console.log('task-4');

const myNewArrowFunction = function(...rest) {
    return console.log(rest)
};
myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");
