import React from "react";

class AccountDetail extends React.Component {
  render() {

    if(!this.props.user) {
      return null;
    }
    
    var accounts = this.props.accounts;
    var id = this.props.users.account;
    var apps = [];

    accounts.forEach(function(account) {
      if(account.id === id) {
        Object.keys(account.text.apps).forEach(function(key) {
          apps.push(account.text.apps[key].title);
        })
      }
    })

    return(
      <div>
      <p>{this.props.user.name}</p>
      <p>{this.props.user.account}</p>
      <p>Users Apps</p>
      <p>{apps}</p>
      </div>
      )
  }
}







export default AccountDetail;