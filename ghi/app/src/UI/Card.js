import React from "react";

function Card(props) {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="card">{props.children}</div>
    </div>
  );
}

export default Card;
