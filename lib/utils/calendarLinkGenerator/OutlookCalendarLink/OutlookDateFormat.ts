const OutlookDateFormat = (data: Date): string => {
  let y = data.getFullYear().toString();
  let m = (data.getMonth() + 1).toString();
  let d = data.getDate().toString();
  if (parseInt(m) < 10) {
    m = "0" + m;
  }
  if (parseInt(d) < 10) {
   d = "0" + d;
  }
    const result = y+"-"+m+"-"+d;   
    return result;
  };
  export default OutlookDateFormat;