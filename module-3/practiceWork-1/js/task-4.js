console.log('task-4.js');

const cafe = {
    name: 'Republic',
    width: 200,
    height: 300,
    personal: 5,
    hr: true,
    sum() {
        const sum = Number(this.width) * Number(this.height);
        return sum;
    },
};

const entries = Object.entries(cafe);
for (const entry of entries) {
    const a = entry[0];
    const b = entry[1];
    console.log(`Ключ ${a} - Значення ${b}`);
}
console.log('P =', cafe.sum());