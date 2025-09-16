import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          loggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => <span> {loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Sai Dharshan Gudavalli (Function)"} /> */}
        <UserClass name={"First (Class)"} location={"Chennai (Class)"} />
      </div>
    );
  }
}

export default About;
