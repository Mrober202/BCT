import React from "react";
import firebaseData from "../firebaseData.js";
import AccountDetail from "../components/AccountDetail.jsx";
import AccountSelector from "../components/AccountSelector.jsx";

// container sets up the space on the page that the retrieved data will be constructed in.

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      users: [],
      focusAccount: null
    };
  }

// componentDidMount() instansiates the retrieval of the data via firebase.
  componentDidMount() {
   let userDetails = firebaseData.database().ref("users").orderByKey();
     // console.log(userDetails);
     userDetails.on('child_added', snapshot => {
       let user = {
         text: snapshot.val(),
         id:snapshot.key
       };
       this.setState({
         users: [user.text].concat(this.state.users)
       });
     }, error => {console.log(error);
     })
     let accountDetails = firebaseData.database().ref("accounts").orderByKey();
     // console.log(accountDetails);
     accountDetails.on('child_added', snapshot => {
       let account = {
         text: snapshot.val(),
         id: snapshot.key
       };
       this.setState({
         accounts: [account].concat(this.state.accounts)
       });
     })
   }

   // Method to define the selcted item from the drop down.
   setFocusUser(user) {
    this.setState({
      focusUser: user
    })
  }

  render() {
    return(
      <div>
      <h1>Apps and Users</h1>
      <p> Select a name from the dropdown menu to view users information and their app.</p>
      <AccountSelector
      users={this.state.users}
      selectUser={this.setFocusUser.bind(this)}
      />
      <AccountDetail
      user={this.state.focusUser}
      accounts={this.state.accounts}
      />
      </div>  
      );
  }

}

export default ListContainer;
