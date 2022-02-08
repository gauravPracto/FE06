import React from "react";
export default (props) => {
  return (
    <div className="widget" onClick={() => props.toggle(props.weather[0])}>
      <div className="left-panel panel">
        <div className="date">
          {String(props.weather[1].date).slice(0, -40)}
        </div>
        <div className="city">{props.weather[1].location}</div>
        <div className="temp">
          <img src={props.weather[1].icon} alt="" width="60"></img>
          {console.log(props.weather)}
          {props.weather[1].day}&deg;
        </div>
      </div>
      <div className="right-panel panel">
        {props.weather[1].full ? (
          <ul>
            <li>evening : {props.weather[1].eve}</li>
            <li>maximum : {props.weather[1].max}</li>
            <li>minimum : {props.weather[1].min}</li>
            <li>morning : {props.weather[1].morn}</li>
            <li>night : {props.weather[1].night}</li>
          </ul>
        ) : (
          <img
            src="https://cdn-icons.flaticon.com/png/512/3506/premium/3506228.png?token=exp=1644307066~hmac=cc04957ad5ff127fa6a9ddfe1dc3b759"
            alt=""
            width="160"
          ></img>
        )}
      </div>
    </div>
  );
};
