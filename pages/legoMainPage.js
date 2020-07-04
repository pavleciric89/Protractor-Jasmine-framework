let legoMainPage = function () {

    let btnEntry = element(by.buttonText('Continue'));
    let acceptCookiesBtn = element(by.buttonText("Accept Cookies"));
    let shopBy_tab = element(by.cssContainingText('.MainBarstyles__MenuItemLabel-sc-1cg7sjw-9', 'Shop By'));
    let dropDownMenu_Age = element(by.cssContainingText('.MegaMenuTwoLevelsstyles__ParentItemText-sc-17enncn-2', 'Age'));
    let ageListEl = element.all(by.xpath("//ul[@class='sharedstyles__SubMenuWithImages-p0zpyg-11']/li"));
    let arrayAgeList = ["1-2", "3-5", "6-8", "9-11", "12+"];
    let wishList = element(by.cssContainingText(".UtilityBarstyles__UserMenuItem-sc-1uwh8t8-13", "Wish list"));
    let searchInput = element(by.id("desktop-search-search-input"));
    let itemsOfSectionCategiry = element.all(by.css("#blt90318fcdded3f12d > section > ul>li"));
    let arrayOfItemNamesFromCategorySection =
        ['New',
            'Exclusives',
            'Promotions',
            'Harry Potter™',
            'Pick-a-Brick',
            'Retiring soon',
            '#LetsBuild Together',
            'VIP'
        ];

    this.entryWindow = () => {
        btnEntry.click();
    }
    this.acceptCookiesClick = () => {
        acceptCookiesBtn.click();
    }
    this.shopByAge = () => {
        browser.actions().mouseMove(shopBy_tab).mouseMove(dropDownMenu_Age).click().perform();
    }
    this.verifyingShopByAgeList = () => {
        ageListEl.each(function (element, index) {
            element.getText().then(function (text) {
                expect(text).toBe(arrayAgeList[index]);
            });
        });
    }
    this.searchItem = (itemName) => {
        searchInput.sendKeys(itemName);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
    this.clickOnWishList = () => {
        wishList.click();
    }
    this.checkTitlesofItems = () => {
        itemsOfSectionCategiry.getText().then(function (titles) {
            expect(titles).toEqual(arrayOfItemNamesFromCategorySection);
            console.log(titles);
        })
    }

}
module.exports = new legoMainPage;