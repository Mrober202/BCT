import React from "react";


class AccountSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    };
  }

  // handle new changes to the selected index.
  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    })

    const selectUser = this.props.users[newIndex];
    this.props.selectUser(selectUser);
  }

  // render the drop down menu.
  render() {
    const options = this.props.users.map((user, index) => {
      return <option value={index} key={index}>{user.name}</option>
    })

    return(
      <div>
      <select
      id="users"
      value={this.state.selectedIndex}
      onChange={this.handleChange.bind(this)}>
      {options}
      </select>
      </div>
      )
  }
}
export default AccountSelector;