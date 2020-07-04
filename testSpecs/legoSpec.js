let legoMainPage = require("../pages/legoMainPage")
let loginPage = require("../utils/utils");
let productPage = require("../pages/legoProductPage");
const wishListPage = require("../pages/legoWishListPage");


describe('lego WebSite Testing', () => {

    beforeEach(function () {
        loginPage.get("https://www.lego.com/en-us");
    });

    it("Verifying shopBy age list", () => {
        legoMainPage.entryWindow();
        legoMainPage.acceptCookiesClick();
        legoMainPage.shopByAge();
        legoMainPage.verifyingShopByAgeList();
    });

    it("Verifying wishlist", () => {
        //enter a full name of item
        let searchName = "Demon Bull King";
        legoMainPage.searchItem(searchName);
        productPage.clickOnItem();
        productPage.addToWishListClick();
        legoMainPage.clickOnWishList();
        wishListPage.verifyItemNameInWishList(searchName);
    })
    it("Check the names and number of items in 'categories' section", () => {
        legoMainPage.checkTitlesofItems();
    })


});
