const FormatTitle = (title:string) => {
    const formatTitle = title.split(" ");
    for (let i = 0; i < formatTitle.length - 1; i++) {
        if (formatTitle[i] === "&") {
          formatTitle[i] = "and";
        }
        if (formatTitle[i] === "@") {
          formatTitle[i] = "%40";
        }
        if (formatTitle[i] === "/") {
          formatTitle[i] = "%2F";
        }
      }
      return formatTitle.join(" ");
}
export default FormatTitle