import React from "react";
import firebaseData from "../firebaseData.js";
import AccountDetail from "../components/AccountDetail.jsx";
import AccountSelector from "../components/AccountSelector.jsx";

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      users: [],
      focusAccount: null
    };
  }

  ComponentDidMount() {
    let userDetails = firebaseData.database().ref("users").orderByKey();
    userDetails.on("child_added", snapshot => {
      let user = {
        text: snapshot.val(),
        id:snapshot.key 
     };
      this.setState({
        users: [user.text].concat(this.state.users)
      });
    })
    let accountDetails = firebaseData.database().ref("accounts").orderByKey();
    accountDetails.on("child_added", snapshot => {
      let account = {
        text: snapshot.val(),
        id: snapshot.key
      };
      this.setState({
        accounts: [account.text].concat(this.state.accounts)
      });
    })
  }

  setFocusUser(user) {
    this.setState({
      focusUser: user
    })
  }

  render() {
    return(
      <div>
        <h1>Apps and Users</h1>
        <AccountSelector
          users={this.state.users}
          selectedUser={this.setFocusUser.bind(this)}
        />
        <AccountDetail
          accounts={this.state.accounts}
          user={this.state.focusUser}
        />
      </div>  
      );
  }

}

export default ListContainer;
