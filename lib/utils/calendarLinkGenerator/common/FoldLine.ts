const FoldLine = (line: string) => {
    const maxLength = 75;
    if (line.length <= maxLength) {
      return line;
    }
    const folded = [];
    let index = 0;
    while (index < line.length) {
      folded.push(line.slice(index, index + maxLength));
      index += maxLength;
    }
    return folded.join("\r\n");
  };

  export default FoldLine;
