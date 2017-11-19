import React from "react";

class AccountDetail extends React.Component {
  render() {

    // if the choice inst that user then break.
    if(!this.props.user) {
      return null;
    }

    var accounts = this.props.accounts;
    var id = this.props.user.account;
    var apps = [];

    // for each of the accounts in the dataset if the id matches push the app into the new array of apps for that user.
    accounts.forEach(function(account) {
      if(account.id === id) {
        Object.keys(account.text.apps).forEach(function(key) {
          apps.push(account.text.apps[key].title);
        })
      }
    })

    return(
      <div>
      <p>Account User: {this.props.user.name}</p>
      <p>Account ID: {this.props.user.account}</p>
      <p>Users Apps: {apps}</p>
      </div>
      )
  }
}







export default AccountDetail;