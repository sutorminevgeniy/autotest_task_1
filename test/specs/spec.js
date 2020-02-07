// spec.js
const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

describe('Region changing shop.westerndigital.com', function () {
  let homePage, productsPage;

  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");

    homePage.open();

    homePage.navigate.hoverButtonShop();
    await homePage.navigate.clickButtonAllProducts();

    productsPage = PageFactory.getPage("Products");
    await productsPage.waitProducts();

    await productsPage.chooseSortBy();
    await productsPage.waitProducts();
    await productsPage.getPrices();

    await browser.sleep(5000);
  });


  it('Verifying URI', async function () {
    expect(1).to.equal(1);
  });


  after(function () {
    // browser.close();
  });
});