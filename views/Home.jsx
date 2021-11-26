import React from 'react';

function Home(props) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8"></meta>
                <title>Account Test</title>
                <link rel="stylesheet" href="/public/app.css" />
            </head>
            <body>
                <div className="container">
                    <h1 className="header">Welcome to the Account Lookup System</h1>
                    <h3>Please enter your card number below to find your balance</h3>
                    <form className="form1" id="lookup-form" action="/accounts" method="GET">
                        <input name="cardNumber" className="cardNumber" type="text" align="center" placeholder="Card Number" required></input>
                        <button type="submit" id="submit" className="submit" align="center">Look Up!</button>
                    </form>
                </div>
            </body>
        </html>
    );
}

module.exports = Home;