class BankAccount {
    constructor(intRate = 0.1, balance = 0) {
        this.interestRate = intRate;
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
    yieldInterest() {
        if (this.accountBalance > 0) {
            this.accountBalance *= this.interestRate;
            return this
        } else {
            console.log("Insufficient funds: no interest")
            return this
        }
    }
}
class User {
    constructor(userName, emailAddress) {

        this.name = userName;
        this.email = emailAddress;
        this.account = new BankAccount()
    }
    makeDeposit(amount) {
        this.account.deposit(amount);
        return this
    }
    makeWithdrawal(amount) {
        this.account.withdraw(amount)
        return this
    }
    displayAccountInfo() {
        this.account.displayAccountInfo()
        return this
    }
    yieldInterest() {
        this.account.yieldInterest()
        return this
    }
}

const rick = new User("Rick", "rick@gamil.com")

rick.makeDeposit(50).makeDeposit(100).makeDeposit(5).makeWithdrawal(200).yieldInterest().displayAccountInfo();
