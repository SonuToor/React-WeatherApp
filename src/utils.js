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