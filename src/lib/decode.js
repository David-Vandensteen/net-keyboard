export default (buffer) => {
  const messages = buffer.toString()
    .split('\n');
  return messages.filter((message) => message !== '');
};
