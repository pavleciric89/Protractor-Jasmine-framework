let wishListPage = function () {
    let item = element(by.css(".ProductRowstyles__TextWrapper-cbbmmq-11>span"));

    this.verifyItemNameInWishList = (name) => {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(item), 10000);
        item.getText().then(function (text) {
            expect(text).toEqual(name);
        });

    }
}
module.exports = new wishListPage;