import React from "react";

class Payment extends React.Component {
  render() {
    return (
      <div>
        <table border="0" cellPadding="10" cellSpacing="0" align="center">
          <tbody>
            <tr>
              <td align="center" />
            </tr>
            <tr>
              <td align="center">
                <a
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=bowlpooldirector%40gmail%2ecom&lc=US&item_name=Bowl%20Pool%20Central&amount=5%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted"
                  title="Pay Now!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
                    border="0"
                    alt="PayPal Logo"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td align="center" style={{ maxWidth: "400px" }}>
                The cost is $5 to enter, you can either pay with&nbsp;
                <a
                  href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=bowlpooldirector%40gmail%2ecom&lc=US&item_name=Bowl%20Pool%20Central&amount=5%2e50&currency_code=USD&button_subtype=services&bn=PP%2dBuyNowBF%3abtn_buynowCC_LG%2egif%3aNonHosted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paypal
                </a>
                &nbsp; or mail in a check. Paypal is $5.50 as Paypal takes a
                cut. Please remember to pay: the director has a hard time
                covering payment for everyone. Entries must be received by the
                first game (Time TBD).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Payment;
