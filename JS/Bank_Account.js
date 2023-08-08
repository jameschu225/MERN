class BankAccount {
    constructor(intRate, balance = 0) {
        this.interestRate = intRate ;
        this.accountBalance = balance;
    } 
    deposit(amount) {
        this.accountBalance += amount;
            return this
    }
    withdraw(amount) {
        if (this.accountBalance >= amount) {
            this.accountBalance -= amount;
            return this
        } else {
            this.accountBalance -= 5;
            console.log("Insufficient funds: Charging a $5 fee")
            return this
        }
    }
    displayAccountInfo() {
        console.log(`Balance: ${this.accountBalance}`)
        return this
    }
    yieldInterest(intRate) {
        if (this.accountBalance > 0) {
            this.accountBalance *= intRate;
            return this
        }else{
            console.log("Insufficient funds: no interest")
            return this
        }
    }
}

const account1 = new BankAccount(0.01, 200);
const account2 = new BankAccount(0.5, 100);


account1.deposit(200).deposit(300).deposit(100).withdraw(500).yieldInterest(account1.interestRate).displayAccountInfo();
account2.deposit(50).deposit(100).withdraw(100).withdraw(200).withdraw(50).withdraw(200).yieldInterest(account2.interestRate).displayAccountInfo();