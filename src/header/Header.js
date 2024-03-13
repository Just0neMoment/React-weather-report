import React from "react";

import { FaCloudSun, FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

import "./header.modules.css";

function Header() {
  return (
    <div className="header">
      <h2>
        <FaCloudSun />
        Weather
      </h2>
      <ul>
        <li>
          <a href="https://openweathermap.org/" target="_blank">
            <TbApi />
          </a>
        </li>
        <li>
          <a href="https://github.com/Just0neMoment/React-weather-report" target="_blank">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;