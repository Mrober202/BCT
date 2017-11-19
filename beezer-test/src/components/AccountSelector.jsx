import React from "react";


class AccountSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    };
  }

  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    })
  
    const selectedUser = this.props.users[newIndex];
    this.props.selectedUser(selectedUser);
  }

  render() {
    const options = this.props.users.map((user, index) => {
      return <option value={index} key={index}>{user.name}</option>
    })

    return(
      <select
      id="users"
      value={this.state.selectedIndex}
      onChange={this.handleChange.bind(this)}>
      {options}
      </select>
      )
  }
}
export default AccountSelector