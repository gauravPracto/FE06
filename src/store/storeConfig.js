const { configureStore } = require("@reduxjs/toolkit");
const { reducers: weatherReducers } = require("../redux/weather.js");
const apiHandler = require("../middleware/api.js");
module.exports = configureStore({
  reducer: weatherReducers,
  middleware: [apiHandler],
});
