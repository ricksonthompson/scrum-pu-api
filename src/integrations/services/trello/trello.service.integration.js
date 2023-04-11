const { trelloApi } = require("../../api");

class TrelloServiceIntegration {
  constructor() {}
  async getCard(cardId) {
    try {
      const { data } = await trelloApi().get(
        `https://api.trello.com/1/cards/${cardId}`
      );
      return data;
    } catch (e) {
      console.log("[trello service integration] get card", e);
      this.error(e);
    }
  }

  error(e) {
    throw new Error("[trello service integration]", e);
  }
}

module.exports = {
  TrelloServiceIntegration,
};
