const BasePage = require("../base_page/base_page");

class RegionPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/region-selector";
  }

  open() {
    return super.open(this.url);
  }

  clickRussionRegion() {
    browser.wait(
      ExpectedConditions.presenceOf(
        element(by.css("a.storeLanguageSelectorHref[href='/ru-ru']"))),
      5000);

    return element(by.css("a.storeLanguageSelectorHref[href='/ru-ru']")).click();
  }
};

module.exports = RegionPage;