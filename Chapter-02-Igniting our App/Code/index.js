import React from 'react';
import ReactDOM from "react-dom/client";

// Create nested React Elements
const heading1 = React.createElement(
    "h1",
    {
      id: "head1",
      style: {
        color: "#cc0066"
      }
    },
    "Hello Awesome peeps out there!!"
  );
  const image = React.createElement(
    "img",
    {
      id: "image",
      style: {
        height: "350px",
        width: "350px"
      },     
      src: "https://images.unsplash.com/photo-1627742480166-a1305b499492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGhlbGxvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }, null
  );
  
  const paragraph = React.createElement(
    "p",
    {
      id: "paragraph",
      style: {
        fontWeight: "600",
      }
    },
    "Disclaimer: Using React and ReactDOM by importing them"
  );

  const heading2 = React.createElement(
    "h2",
    {
      id: "head2",
      style: {
        color: "green",
        fontSize: "25px"
      }
    },
    "Let's start learning React!"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, paragraph, image, heading2]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);
  