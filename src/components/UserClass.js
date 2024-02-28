import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        id: 1,
        name: "Abc",
        username: "xyz",
      },
    };
    // console.log(" constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await data.json();

    this.setState({userInfo: json});
    // console.log('child mount')
  }

  componentDidUpdate(){
    // console.log('child update')
  }

  componentWillUnmount(){
    // console.log(' child componentWillUnmount');
  }

  render() {
    const { id, name, username } = this.state.userInfo;
    // console.log(" render");
    return (
      <div className="user-card">
        <h1>ID: {id}</h1>
        <h1>Name: {name}</h1>
        <h2>Username: {username}</h2>
      </div>
    );
  }
}

export default UserClass;
