const axios = require("axios");

const trelloApi = () => axios.create({
  baseUrl: process.env.TRELLO_API_URL,
  params: {
    key: process.env.KEY_TRELLO_API,
    token: process.env.TOKEN_TRELLO_API,
  },
});

module.exports = {
  trelloApi,
};
