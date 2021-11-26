import React, {Fragment} from 'react';

function Balance(props) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8"></meta>
                <title>Account Test</title>
                <link rel="stylesheet" href="/public/app.css" />
            </head>
            <body>
                <div className="container">
                    {props.balance ? (
                        <Fragment>
                            <h3>We were able to successfully locate your account!</h3>
                            <p className="balanceDetail">Your Balance is: <b>${props.balance}</b></p>
                            <a href="/">Would you like to check another account?</a>
                        </Fragment>
                    ) : (
                      <h3>Unable to locate your account information. Please <a href="/">try again</a></h3>  
                    )}
                </div>
            </body>
        </html>
    );
}

module.exports = Balance;