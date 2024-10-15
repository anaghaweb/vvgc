const ConstructDetailsURL = (eventId?: string): string => {
  const openanchor = "%3Ca%20href%3D%22";
  const closeanchor = "%22%3E%20click%20here%3C%2Fa%3E";
  const details = encodeURIComponent("For complete event details ") +"%3A%20"+ openanchor+
   `http://vvgc.org/events/${eventId}`+closeanchor;
  return details;
};

export default ConstructDetailsURL;