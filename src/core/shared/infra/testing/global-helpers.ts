global.fail = (message) => {
  throw new Error(message);
  //@ts-expect-error - this is a test
};
