import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("parent mounted");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"First child from class props"} />
      </div>
    );
  }
}

export default About;
