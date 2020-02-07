const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class ProductsPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/c/all-products";

    this.allProducts = element.all(by.css('.ng-scope[ng-repeat^="products in productJSON"]'));
    this.lastProducts = element(by.css('.ng-scope[ng-repeat^="products in productJSON"]:last-child'));
  }

  open() {
    return super.open(this.url);
  }

  async waitProducts() {
    browser.wait(
      ExpectedConditions.urlIs(this.url),
      5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.allProducts),
      10000);
  }

};

module.exports = ProductsPage;