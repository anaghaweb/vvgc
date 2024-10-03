const OutlookTimeFormat = (time: string): string => {
  const a = time.split(":");
  const b = a[1].split(" ");
  let hours = parseInt(a[0]);
  const minutes = parseInt(b[0]);
  const ampm = b[1].toLowerCase();
  if (ampm === "pm" && hours !== 12) {
    hours += 12;
  } else if (ampm === "am" && hours === 12) {
    hours = 0;
  }

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:00.000`;
  return formattedTime;
};
export default OutlookTimeFormat;
