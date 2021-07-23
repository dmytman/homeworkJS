class User {
  // аналог функції-конструктора
  constructor (object) {
    const {name, age, followers} = object;
    this._name = name;
    this._age = age;
    this._followers = followers;
}
  getInfo() {
    console.log(`Name - ${this._name}, age - ${this._age}, followers - ${this._followers} `);
  }
}


const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
  const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  poly.getInfo(); // User Poly is 3 years old and has 17 followers