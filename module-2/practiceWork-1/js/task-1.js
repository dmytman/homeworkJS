console.log('task-1,2,3');

console.log('task-1');
const Arr1 = [1, 5, '4', 'hello'];

const Arr2 = [true, 2, {}, ['a'], 222];

console.log(Arr1[1]);
console.log(Arr2[1]);
const sum = (Arr1[1]) + (Arr2[1]);
console.log('Сума двох елементів =', sum);

console.log('task-2');
Arr1[4] = 22;
console.log(Arr1);

console.log('task-3');
for (const allContent of Arr2){
    console.log(typeof allContent)
}
