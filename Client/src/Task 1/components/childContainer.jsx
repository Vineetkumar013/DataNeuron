import React from "react";

const childContainer = ({ name, number }) => {
  return (
    <div className={`child ${name}`}>
      <h1>Window {number}</h1>
      <h2>Hello React</h2>
      <p>
      React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.
      </p>
    </div>
  );
};

export default childContainer;
