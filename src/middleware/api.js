const OpenWeatherAPI = require("openweather-api-node");
const { reqSucceed, reqUnSucceed } = require("../redux/weather").actions;
let weather = new OpenWeatherAPI({
  key: "5a619077da19af694c1b6f964c0ec25d",
  locationName: "lucknow",
  units: "imperial",
});

const apiHandler =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type == "apiCall") {
      try {
        weather.setLocationByName(action.payload.location);
        weather
          .getDailyForecast(5)
          .then((data) => {
            temp = [];
            data.map((element) => {
              console.log(element, "ff");
              temp.push({
                ...element.weather.temp,
                date: element.dt,
                icon: element.weather.icon.url,
                location: action.payload.location,
              });
            });
            dispatch(reqSucceed({ allWeather: temp }));
            console.log(temp);
          })
          .catch((e) => {
            console.log(e);
            dispatch(reqUnSucceed());
          });
      } catch (e) {
        dispatch(reqUnSucceed());
      }
      console.log("inMiddleWare");
    }
  };

module.exports = apiHandler;
