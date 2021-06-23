export const clientIdRegex = new RegExp(/client_id=(:?[\w\d]{32})/);
export const scriptUrl = new RegExp(
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$/
);
