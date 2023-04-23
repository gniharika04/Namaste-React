import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import "./styles.css";

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement(
//   "div",
//   {
//     id: "title",
//     className: "title",
//     style: {
//       padding: "20px",
//     },
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "head1",
//       },
//       "I am H1 tag"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "head2",
//       },
//       "I am H2 tag"
//     ),
//     React.createElement(
//       "h3",
//       {
//         key: "head2",
//       },
//       "I am H3 tag"
//     ),
//   ]
// );

// Creating multiple react elements inside element by using React.creatElement can create a huge mess in our code.
// To make our task easy, and code clean Facebook developers have developed JSX for us.
// JSX is javascript extension.
// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
// Q: Create the same element using JSX
// const header = (
//   <div className="Title" key="title" style={{padding: "20px"}}>
//     <h1 key="h1">I'm h1 tag</h1>
//     <h2 key="h2" style={{margin: "20px 0"}}>>I'm h2 tag</h2>
//     <h3 key="h3">I'm h3 tag</h3>
//   </div>
// );

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component
// Funtional component is nothing but just a normal JS function.
// Whenever you want to render funtional component, use it with <>. Example: <Header /> or Header()
//Q: Create a functional component of the same with JSX and pass attribute to the into the tag
// const Header = () => {
//   return (
//     <div className="Title" key="title" style={{padding: "20px"}}>
//       <h1 key="h1" style={{color: "#db2044"}}>This is h1 tag</h1>
//       <h2 key="h2" style={{color: "#6f085a", margin: "20px 0"}}>This is h2 tag</h2>
//       <h3 key="h3" style={{color: "#c51c53"}}>This is h3 tag</h3>
//     </div>
//   );
// };

// Composition of Component (Add a component inside another)
// const AnotherComponent = function () {
//   return <h2 style={{color: "#9D00C6", margin: "20px 0"}}> Hey, I am Another Component</h2>;
// };

// const Header = () => {
//   return (
//     <div className="Title" key="title" style={{padding: "20px"}}>
//       <h1 key="h1" style={{margin: "20px 0"}}>Hey, I am h1 tag</h1>
//       <h2 key="h2" >Hey, I am h2 tag</h2>
//       <AnotherComponent />
//       <h3 key="h3">Hey, I am h3 tag</h3>
//     </div>
//   );
// };

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
// const titleComponent = (
//   <h1 style={{ color: "#FF2525"}} key="1">
//     This is React Element
//   </h1>
// ); // This is React element

// const TitleElement = () => {
//   return (
//     <h1 style={{ color: "#FC007A"}} key="2">
//       This is Functional component
//     </h1>
//   );
// }; // This is Title Component

// const Header = () => {
//   return (
//     <div className="title">
//       {titleComponent}
//       <TitleElement></TitleElement>
//       <h1 key="3" style={{ color: "#FF005B" }}>This is h1 tag of Header component</h1>
//     </div>
//   );
// };

/*Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
  return (
    <div className="main">
      <img className="bgImage" src="https://i.pinimg.com/236x/0e/1b/1e/0e1b1ec39c2782cefdc27ee4f8a0bfa5.jpg"></img>
      <header className="header">
        <div className="header-part1">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="head">Welcome</h1>
        </div>
        <div className="header-part2">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
            <i class="ri-search-line"></i>
        </div>
          <i class="ri-user-2-fill"></i>
      </header>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(Header()); //OR - root.render(<Header />)
// root.render(header);
