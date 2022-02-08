import React, { useState } from "react";
import CardInner from "./CardInner.jsx";
import Search from "./Search.jsx";

export default (props) => {
  return (
    <React.Fragment>
      <div>
        <div className="flex-box">
          <Search onSearch={props.onSearch}></Search>
          {Object.entries(props.allWeather).map((t, k) => {
            return t[0] == "success" ? (
              console.log("here")
            ) : (
              <CardInner
                weather={t}
                toggle={props.toggle}
                current={k}
              ></CardInner>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
