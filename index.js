// bank account
// implement the following prototype
// deposit, withdraw,
// amount--mu

function bankAccount(accNo, accName, balance) {
  this.accNo = accNo;
  this.accName = accName;
  this.balance = balance;
}

bankAccount.prototype.deposit = function(depositAmount){
  if (isNaN(parseFloat(depositAmount))) {
    return console.log('please enter the amount in numbers')
  }else if (Math.sign(depositAmount) === -1){
    return console.log('please enter a positive number')
  }else{
    return console.log(`you have deposited ${depositAmount} and this is your balance ${this.balance += depositAmount}`)
  }
}

bankAccount.prototype.withdraw = function (withdrawalAmount) {
  if (withdrawalAmount > this.balance) {
      return console.log(`you do not have sufficient balance in your account. Your account balance is ${this.balance}`)
  } else {
      return console.log(`you have withdrawn ${withdrawalAmount} and this is your balance ${this.balance -= withdrawalAmount}`)
  }
}
bankAccount.prototype.getBalance = function () {
  return console.log(`your balance is ${this.balance}`)
}


// generating IBAM
bankAccount.prototype.generateIBAN = function (){
  // base 36
  const IBAN = Math.random().toString(36).substring(3,8).toUpperCase()
  
  return console.log(`your IBN number is ${IBAN + this.accNo}`)
}

const elijah = new bankAccount(567765554456, "elijah peter", 200)

user1 = new bankAccount(4567879, 'faith', 100000)
console.log(user1.deposit(5000))
console.log(user1.withdraw(20000))
console.log(user1.getBalance())

elijah.generateIBAN()