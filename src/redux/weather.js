const { createSlice } = require("@reduxjs/toolkit");
const slice = createSlice({
  name: "weather",
  initialState: {
    first: { full: false },
    second: { full: false },
    third: { full: false },
    fourth: { full: false },
    fifth: { full: false },
  },
  reducers: {
    reqSucceed: (weatherObj, action) => {
      weatherObj.first = {
        ...weatherObj.first,
        ...action.payload.allWeather[0],
      };
      weatherObj.second = {
        ...weatherObj.second,
        ...action.payload.allWeather[1],
      };
      weatherObj.third = {
        ...weatherObj.third,
        ...action.payload.allWeather[2],
      };
      weatherObj.fourth = {
        ...weatherObj.fourth,
        ...action.payload.allWeather[3],
      };
      weatherObj.fifth = {
        ...weatherObj.fifth,
        ...action.payload.allWeather[4],
      };
      weatherObj.success = true;
    },
    reqUnSucceed: (weatherObj, action) => {
      weatherObj.success = false;
    },
    toggle: (weatherObj, action) => {
      weatherObj[action.payload.id].full = !weatherObj[action.payload.id].full;
    },
  },
});

module.exports.reducers = slice.reducer;
module.exports.actions = slice.actions;
