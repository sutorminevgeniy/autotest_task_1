class BasePage {
  // constructor() { }

  async getCurrenUrl() {
    const currentUrl = await browser.getCurrentUrl();

    return currentUrl;
  };

  async getTitle() {
    return browser.getTitle();
  };

  open(url) {
    return browser.get(url);
  };
}

module.exports = BasePage;