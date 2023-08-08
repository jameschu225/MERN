class User {
    constructor(userName, emailAddress) {

        this.name = userName;
        this.email = emailAddress;
        this.account = new BankAccount(intRate =0.1, balance =0);
    }
    makeDeposit(amount) {
        this.account.balance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.account.balance -= amount;
        return this;
    }
    displyBalance() {
        console.log(`User: ${this.name}`, `Balance: $${this.account.balance}`)
        return this;
    }
    transferMoney(otherUser, amount) {
        otherUser.makeDeposit(amount);
        this.makeWithdrawal(amount);
        return this;
    }
}

const rick = new User("Rick", "rick@gamil.com")
// const morty = new User("Morty", "morty@gamil.com")
// const james = new User("James", "james@gamil.com")
// rick.makeDeposit(50).makeDeposit(100).makeDeposit(5).makeWithdrawal(200).transferMoney(james, 1000).displyBalance();

// morty.makeDeposit(50).makeDeposit(4).makeWithdrawal(200).makeWithdrawal(200).displyBalance();

// james.makeDeposit(1000).makeWithdrawal(200).makeWithdrawal(200).makeWithdrawal(200).displyBalance();

