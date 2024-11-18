'use server'
const getDayOfTheWeek = () => {
    const today = getCurrentDate();
    const num = today.getDay();
    console.log("num",num)
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[num];
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const dateFormat = new Intl.DateTimeFormat("en-US", {
      timeZone:"America/Los_Angeles",
      timeZoneName:"short"
    })

    const dateInLA = dateFormat.format(currentDate);
    const formatted_LA_Date = new Date(dateInLA);
    return formatted_LA_Date;
  }

  export {getDayOfTheWeek, getCurrentDate}