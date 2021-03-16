console.log("task-7.js");


const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,
    transactions: [],

    createTransaction(amount, type) {
        const transactionsSum = {
            transactionsAmount: amount,
            transactionsType: type,
        }
        return transactionsSum;
     },

    deposit(amount, type = "deposit") { 
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        if (type === "deposit") {
            this.balance += amount;
        }
        return `Успішно додано кошти ${amount} - на рахунку ${this.balance}`;
    },

    withdraw(amount, type = "withdraw") {
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
        if (type === "withdraw" &&  this.balance > amount ) {
          this.balance -= amount;      
        
            
            return `Успішно зняття коштів ${amount} - на рахунку залишилось ${this.balance}`;
        }else
            return 'Зняття такої суми не можливо, недостатньо коштів';

        },
        

    getBalance() {
        return `На рахунку ${ this.balance }`;
     },

    getTransactionDetails(id) {
        return this.transactions[id];
     },

    getTransactionTotal(type) {
        let total = 0;
        for (const  i of this.transactions) {
          const { transactionsAmount, transactionsType } = i;
          if (type === transactionsType) {
              total += transactionsAmount;
              return `Сума всіх коштів при ${type} - ${total}`; 
            }         
        }     
    },
};
console.log(account.getBalance());
console.log(account.deposit(1));
console.log(account.deposit(6840));
console.log(account.getTransactionTotal("deposit"));
console.log(account.withdraw(841));
console.log(account.getTransactionTotal("withdraw"));
console.log(account.getTransactionDetails(1));
