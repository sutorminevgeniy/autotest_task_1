const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

describe('Sorting products shop.westerndigital.com', function () {
  let homePage, productsPage;
  let resultPrice, sortedPrice;

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
    resultPrice = await productsPage.getPrices();


    let [...sortedResult] = resultPrice;

    sortedResult.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      }

      if (a.index < b.index) {
        return -1;
      } else if (a.index > b.index) {
        return 1;
      }

      return 0;
    })

    sortedPrice = sortedResult
  });

  it('Verifying ordered dy price', async function () {
    expect(resultPrice).to.have.ordered.members(sortedPrice);
  });

  after(function () {
    // browser.close();
  });
});