const BasePage = require("../base_page/base_page");

class HomePage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com";
  }

  open() {
    return super.open(this.url);
  }

  clickRegionSelector() {
    return element(by.css(".image>a[href='/region-selector']")).click();
  }

  clickRussionRegion() {
    browser.wait(
      ExpectedConditions.presenceOf(
        element(by.css("a.storeLanguageSelectorHref[href='/ru-ru']"))),
      5000);

    return element(by.css("a.storeLanguageSelectorHref[href='/ru-ru']")).click();
  }

  async getHomePageUrl() {
    browser.wait(
      ExpectedConditions.or(
        ExpectedConditions.urlIs('https://shop.westerndigital.com/ru-ru'),
        ExpectedConditions.urlIs('https://shop.westerndigital.com')),
      5000);

    return browser.getCurrentUrl();
  };

  async getHtmlLang() {
    return element(by.tagName('html')).getAttribute('lang');
  };
};

module.exports = HomePage;