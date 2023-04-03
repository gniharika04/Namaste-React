import React, { Component } from "react";
import user from "../assets/user.jpg";
import SocialClass from "./SocialClass";
import { GITHUB_GET_USER, PROJECT_INFO, USER_INFO } from "../../constants";

class ProfileClass extends Component {
  //extends keyword is used beacuse this is a class and class needs to inherit some properties

  constructor(props) {
    // constructor is a method that is used to create and initialize an object created with a class and this must be unique within a particular class.
    // Whenever class is triggered by react, constructor is called first.
    // constructor is called before render by default whenever class is created.

    super(props);
    // super() is  used to call the constructor of parent class.
    // It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class.

    // We create states in class inside constructor. This is the best place to declare states here as constructor is called first.
    // If we want to create multiple states, then in class all state variables are part of object
    this.state = {
      userInfo: {
        userName: "",
        userBio: "",
      },
    };
    console.log("Child1 constructor");
  }

  async componentDidMount() {
    const response = await fetch(GITHUB_GET_USER + this.props.name);
    const data = await response.json();
    console.log(data);
    //setting state in class component
    this.setState({
      userInfo: {
        userName: data?.name,
        userBio: data?.bio,
        data,
      },
    });
    this.timer = setInterval(() => {
      console.log("I'm printing in every 3 second----Child");
    }, 3000);
    console.log("Child1-componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child1 componendDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child1 componentWillUnmount");
  }

  //You cannot create a react class without render method, this method returns JSX and render in DOM
  render() {
    console.log("Child1-render");
    // destructuring object
    const {
      userInfo: { userName, userBio },
    } = this.state;

    return (
      <div>
        <div className="profile">
          <h1>About Me</h1>
          <img alt="user" src={user} className="userImg"></img>
          <h6>{userName}</h6>
          <h5>{`${userBio} ${USER_INFO}`}</h5>
          <SocialClass/>
        </div>
        <div className="profile">
          <h1>About this Project</h1>
          <img
            src={this.state.userInfo?.data?.avatar_url}
            className="avatar"
          ></img>
          <h5>{PROJECT_INFO}</h5>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
