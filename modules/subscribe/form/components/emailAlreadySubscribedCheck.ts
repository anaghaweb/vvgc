const EmailAlreadySubscribedCheck = (
  subscribedEmailList: string[],
  userInputEmailId: string
): boolean => {
  let response: boolean = false;
  const result = subscribedEmailList.find(
    (emailId) => emailId === userInputEmailId
  );
  if (!result) {
    response = false;
    return response;
  }
  response = true;
  return response;
};

export default EmailAlreadySubscribedCheck;
