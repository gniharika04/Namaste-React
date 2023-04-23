import React, { Component } from "react";
import ProfileFunctional from "./ProfileFunctional";
import ProfileClass from "./ProfileClass";
import SocialClass from "./SocialClass";
import { GITHUB_USER_NAME } from "../../constants";

class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
     console.log("Parent `ComponentDidMount`");
     this.timer = setInterval(()=>{
          console.log("I'm printing in every 1 second----Parent")
     },1000);  
  };

  componentWillUnmount() {
    // this method performs cleanup. It cleans up the current component states when you switch-
    // from one component to another.
    clearInterval(this.timer);
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent render");
    return (
      <>
        {/* <ProfileFunctional name={"I'm prop in functional component"} /> */}
        <div className="about-container">
          <div className="about-left">
            <h1>
              Welcome to the world of <br />
              <span>Testy & Fresh Food</span>
            </h1>
            <h4>
              "You will be amazed by the service and meal provided by the
              <span> Food</span> Picky"
            </h4>
          </div>
        </div>
        {/* Passing props from parent to child from one class to another */}
        <ProfileClass name={GITHUB_USER_NAME} />
        
        {/* Used for testing lifecycle methods */}
        {/* <SocialClass name={GITHUB_USER_NAME} /> */} 
      </>
    );
  }
}
export default About;
