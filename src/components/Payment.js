import React from "react";
import constants from "../common/constants";

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
                  href={constants.paypalUrl}
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
                <img 
                  src="/images/venmo_logo_blue.svg" 
                  alt="venmo logo"
                  style={{height: "142px"}}
                />
              </td>
            </tr>
            <tr>
              <td align="center" style={{ maxWidth: "400px" }}>
                The cost is $5 to enter, you can either pay with&nbsp;
                <a
                  href={constants.paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paypal
                </a>
                &nbsp;, Venmo, or mail in a check. Paypal is $5.50 as Paypal takes a
                cut. For Venmo, please send the payment of $5 to <b>{constants.venmoUser}</b>. Please remember to pay, the director has a hard time
                covering payment for everyone. Entries must be received by the
                first game ({constants.firstGameTime}).

          
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Payment;
