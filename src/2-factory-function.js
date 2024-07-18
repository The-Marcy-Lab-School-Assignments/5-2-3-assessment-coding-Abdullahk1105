const bankAccountFactory = (startingBalance = 0) => {
    let balance = startingBalance
  
    return {
      checkBalance() {
        return balance
      },
      add(amount) {
        balance += amount
        console.log(`$${amount} added.`);
      },
      subtract(amount) {
        balance -= amount
        console.log(`$${amount} subtracted.`)
      }
    }
  }


module.exports = {
  bankAccountFactory,
};
