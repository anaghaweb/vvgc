const GoogleDateFormat = (data: Date): string => {
    // const formattedDate = data.toLocaleDateString().split("/").reverse();
    const dt = new Date(data);
    if(isNaN(dt.getTime())){
      throw new Error("Invalid date format passed to this file");
    }
    let y = dt.getFullYear().toString();
    let m = (dt.getMonth() + 1).toString();
    let d = dt.getDate().toString();
    if (parseInt(m) < 10) {
      m = "0" + m;
    }
    if (parseInt(d) < 10) {
     d = "0" + d;
    }
    const result = y+m+d;
    return result;
  };

  export default GoogleDateFormat;