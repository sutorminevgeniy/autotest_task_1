const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class ProductsPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/c/all-products";

    this.allProducts = element.all(by.css('.ng-scope[ng-repeat^="products in productJSON"] p'));
    this.lastProducts = element(by.css('.ng-scope[ng-repeat^="products in productJSON"]:last-child'));

    this.selectSortBy = element(by.model('sortBy'));
    this.optionLowHight = element(by.css('option[value="priceAsce"]'));
  }

  open() {
    return super.open(this.url);
  }

  async waitProducts() {
    browser.wait(
      ExpectedConditions.urlIs(this.url),
      5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastProducts),
      10000);
  }

  async chooseSortBy() {
    await this.selectSortBy.click();

    return this.optionLowHight.click();
  }

  async getPrices() {
    let prices = await this.allProducts.map(async function(elm, index) {
      return {
        index: index,
        text: await elm.getText()
      };
    });

    console.log(prices);
  }

};

module.exports = ProductsPage;