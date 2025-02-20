const { expect } = require("@playwright/test");

class Base {
  async clickOn(item) {
    await item.click();
  }

  async verifyValue(item, text) {
    await expect(item).toHaveValue(text);
  }

  async verifyText(item, text) {
    await expect(item).toContainText(text);
  }

  async verifystate(item) {
    await expect(item).toBeEnabled;
  }
}

module.exports = { Base };
