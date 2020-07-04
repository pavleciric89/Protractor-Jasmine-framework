let productPage = function () {

    let addToWishList = element(by.css('div.ProductActionsstyles__WishlistButtonWrapper-sc-18otgdy-8.ejtMgg > button'));
    let ListOfItems = element.all(by.xpath("//ul[@class='ProductGridstyles__Grid-lc2zkx-0 eEYiHB']/li"));
    let firstItemOnList = element(by.css(".SearchPagestyles__SearchLayout-sc-1d2gqze-3.lllfog > div > ul > li:nth-child(1)"));

    this.addToWishListClick = () => {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(addToWishList), 10000);
        addToWishList.click();
    }
    this.clickOnItem = () => {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(firstItemOnList), 10000);
        firstItemOnList.click();
    }


}
module.exports = new productPage;