import React from "react";
import "./style.scss";

const Dock = ({ data }) => (
  <div id="dock-container">
    <div id="dock">
      <ul>
        {data.map(value => (
          <li>
            <span>{value.name}</span>
            <a href="#">
              <img src={value.imageURL} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Dock;
