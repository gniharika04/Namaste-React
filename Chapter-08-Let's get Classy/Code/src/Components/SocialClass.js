import React, { Component } from "react";
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";
import { GITHUB_LINK, LINKEDIN_LINK, MAIL_ID, GITHUB_GET_USER } from "../../constants";

class SocialClass extends Component {
  constructor(props){
    super(props);
    console.log("Child2 constructor");
  }
async componentDidMount(){
  // Just to check what if child2 also has an API then what will be lifecycle order??
  // const response = await fetch(GITHUB_GET_USER + this.props.name);
  // const data = await response.json();
  // console.log(data);
  console.log("Child2 componentDidMount");
}

componentDidUpdate() {
  console.log("Child2 componendDidUpdate");
}

  render() {
    console.log("Child2 render");
    return (
      <div className="social">
        <a href={GITHUB_LINK} target="_blank">
          <SiGithub className="github" />
        </a>
        <a href={LINKEDIN_LINK} target="_blank">
          <SiLinkedin className="linkedin" />
        </a>
        <a href={MAIL_ID}>
          <SiGoogle className="google" />
        </a>
      </div>
    );
  }
}

export default SocialClass;
