import React from "react";
import "./style.scss";

const Dock = ({ data }) => (
  <div id="dock-container">
    <div class="circle-container">
      {data.map(value => (
        <li>
          <span>{value.name}</span>
          <a href="#">
            <img src={value.imageURL} />
          </a>
        </li>
      ))}
    </div>
  </div>
);

export default Dock;
