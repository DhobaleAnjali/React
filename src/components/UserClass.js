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
    console.log(" constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const json = await data.json();
    console.log(json);

    this.setState({userInfo: json});
  }

  componentDidUpdate(){
    console.log('update')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    const { id, name, username } = this.state.userInfo;
    console.log(" render");
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
