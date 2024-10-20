const copyToClipboard = async ({
  completeURL,
  
}: {
  completeURL: string;
  
}) => {
  if (window) {
    
    const data = completeURL;
    return await navigator.clipboard.writeText(data);
  } else {
    return null;
  }
};

export default copyToClipboard;
