import React from "react";

function Card(props) {
  const {title, content} = props;
  return (
    <div className="myBlogs justify-center">
      <div className="card bg-amber-100 rounded-md">
        <div className="p-5">
          <span className="card-title p-2 text-lg font-bold">{title}</span>
          <p className="card-description pl-2">
            {content.substring(0, 60) + "  ...  "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
