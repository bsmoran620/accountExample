// These should be stored in a file or database but this is for simplicity
const users = [
  {
      firstName: 'James',
      lastName: 'Smith',
      phone: '3129891233',
      account: {
          cardNumber: '5141000000009082',
          expiration: '062023',
          pin: 'xxxx',
          balance: 112.38
      }
  },
  {
    firstName: 'Paula',
    lastName: 'Bean',
    phone: '3176541213',
    account: {
        cardNumber: '5141000000009844',
        expiration: '062022',
        pin: 'xxxx',
        balance: 62.78
    }
},
];

getAccountByCardNumber = (cardNumber) => {
    // Returns only the first result, assumes cardNumbers are unique
    return users.find(user => user.account.cardNumber === cardNumber);
}

module.exports = {
    getAccountByCardNumber
} 