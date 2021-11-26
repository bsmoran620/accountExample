const express = require('express');
const app = express();

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const { getAccountByCardNumber } = require('./models/accounts');

app.get('/', (req, res) => {
  res.render('Home')
});

app.get('/accounts', (req, res) => {
  // Considerations for future:
  // Sanitize user input
  // Should we parse out characters like '-' or spaces?
  const user = getAccountByCardNumber(req.query.cardNumber);

  console.log(user);
  res.render('Balance', 
    { balance: (user !== undefined && user.account.balance) ? user.account.balance : null });
});

app.listen(3000, () => console.log('Account App listening on port 3000'));
