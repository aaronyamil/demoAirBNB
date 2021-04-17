import React from "react";
import "../styles/stay.css";
import starLogo from "../assests/star-solid.svg";

function Stay(props) {
  return (
    <div className="contentStays">
      <img src={props.list.photo} className="photo" />
      <div className="rows">
        <span className="type">
          {props.list.superHost && (
            <div className="super cols">
              <span>SUPER HOST</span>
            </div>
          )}
          {props.list.type}
        </span>
        <img src={starLogo} alt="Star Logo" className="star" />
        <span className="rating">{props.list.rating}</span>
      </div>
      <div className="rows">
        <span className="title">{props.list.title}</span>
      </div>
    </div>
  );
}

export default Stay;
