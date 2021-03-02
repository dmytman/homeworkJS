console.log('task-1.js');

const user = {
    userName: 'dmytro',
    showUserName: 45,
};
user.updateAge = function(){
    return this.showUserName + 1;
}
console.log(user.updateAge());