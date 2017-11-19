import React from "react";

class AccountDetail extends React.Component {
  render() {
    var accounts = this.props.accounts;
    var id = this.props.account;
    var userApps = [];

    if(!this.props.user) {
      return null;
    }

    accounts.forEach(function(account) {
      if(account.id === id) {
        Object.keys(account.text.apps).forEach(function(key) {
          userApps.push(account.text.userApps[key].appName);
        })
      }
    })

    return(
      <div>
      <p>{this.props.user.name}</p>
      <p>{this.props.user.account}</p>
      <p>Users Apps</p>
      <p>{userApps}</p>
      </div>
      )
  }
}







export default AccountDetail