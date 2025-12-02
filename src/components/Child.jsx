import React from "react";

function Child({ name }) {
  console.log("Child Rendered");
  return <h3>Child: {name}</h3>;
}

export default React.memo(Child);
