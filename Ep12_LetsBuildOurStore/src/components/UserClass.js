import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch(
      "https://api.github.com/users/GudavalliSaiDharshan"
    );
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json, "didmount api");
  }

  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @gudavalli</h4>
      </div>
    );
  }
}

export default UserClass;
