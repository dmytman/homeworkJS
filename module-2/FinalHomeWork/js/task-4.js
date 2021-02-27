console.log('task-4');

const formatString = function (string) {
    let aray = string.split("");
      
    if (aray.length < 40) {
        const a = aray.join("");
        return a;
    }
    if (aray.length > 40) {
        aray.length = 40;
        aray.splice(41, 0, "...");
        const element = aray.join("");
        return element;
}
   
    };

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// повернеться форматований рядок