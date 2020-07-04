function loginPage() {
    this.get = function (url) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
        browser.executeScript('window.localStorage.clear();');
        browser.executeScript('window.sessionStorage.clear();');
        browser.manage().window().maximize();
    }
}

module.exports = new loginPage;