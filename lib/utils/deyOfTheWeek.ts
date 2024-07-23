const dayOfTheWeek = () => {
    const today = new Date();
    const num = today.getDay();
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

  export default dayOfTheWeek