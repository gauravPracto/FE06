import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiAction from "../redux/apiAction";
import Card from "./Card.jsx";
import { actions } from "../redux/weather";

const Weather = () => {
  const toggle = (e) => {
    console.log("in toggle", e);
    dispatch(actions.toggle({ id: e }));
  };
  const onSearch = (e) => {
    dispatch(apiAction({ location: e }));
  };

  const dispatch = useDispatch();
  const weatherState = useSelector((state) => state);
  //   console.log(weatherState);
  useEffect(() => {
    dispatch(apiAction({ location: "lucknow" }));
  }, []);

  console.log(weatherState);
  return (
    <Card allWeather={weatherState} onSearch={onSearch} toggle={toggle}></Card>
  );
};
export default Weather;
