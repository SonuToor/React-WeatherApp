import moment from "moment";

export const createArrayOfDates = (startDate) => {
    var dateArray = [];
    if (startDate === null) {
      return dateArray;
    }
    var currentDate = moment(startDate);
    for (let i = 0; i < 5; i++) {
        dateArray.push(moment(currentDate).format("MMMM Do YYYY"));
        currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  };

export const createWeatherArrays = (weather) => {
  let weatherArrays = [[]]
  let day = 0;
  let firstDay = +(weather[0]["dt_txt"].slice(8,10))

  for (let i = 0; i < weather.length; i++) {
    let currentDay = +(weather[i]["dt_txt"].slice(8,10))
    if (currentDay === firstDay) {
      weatherArrays[day].push(weather[i])
    }
    else {
      day += 1
      weatherArrays.push([])
      weatherArrays[day].push(weather[i])
      firstDay = currentDay
    }
  }
  return weatherArrays
}