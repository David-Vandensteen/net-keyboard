export default (buffer) => {
  if (buffer.length > 255) {
    throw new Error('message is too large to encode');
  }

  const messagesBuffer = Buffer.concat([buffer, Buffer.from('\n')]);
  return messagesBuffer;
};
