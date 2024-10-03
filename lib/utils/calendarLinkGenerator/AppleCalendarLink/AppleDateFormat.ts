const AppleDateFormat = (data: Date): string => {
    const formattedDate = data.toLocaleDateString().split("/").reverse();
    if (parseInt(formattedDate[1]) < 10) {
      formattedDate[1] = "0" + formattedDate[1];
    }
    if (parseInt(formattedDate[2]) < 10) {
      formattedDate[2] = "0" + formattedDate[2];
    }
    const result = formattedDate.join("");
    
    return result;
  };

  export default AppleDateFormat;