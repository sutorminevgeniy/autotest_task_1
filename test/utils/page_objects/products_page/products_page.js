const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class ProductsPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/products";
  };

  open() {
    return super.open(this.url);
  };

  async clickSeePricing() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.xpath("//a[contains(text(),'See pricing')]"))),
      5000);

    await element(by.xpath("//a[contains(text(),'See pricing')]")).click();

    return this;
  }
};

module.exports = ProductsPage;