// spec.js
const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

describe('Region changing shop.westerndigital.com', function () {
  let homePage, regionPage;

  before(function () {
    // browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");

    homePage.open();
    
    homePage.navigate.hoverButtonShop();
    homePage.navigate.clickButtonAllProducts();
  });


  it('Verifying URI', async function () {
    expect(1).to.equal(1);
  });


  after(function () {
    browser.sleep(4000);
    browser.close();
  });
});