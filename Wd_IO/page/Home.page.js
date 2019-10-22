class Home {


    get navigationHeader() {
        return $(".nav-header button");
    }

    get dashboardLink() {
        return $("//a[text()='Dashboard']");
    }

    get usersLink() {
        return $("//a[text()='Users']");
    }


    get reservationsLink() {
        return $("//a[text()='Reservations']");
    }

    get carsLink() {
        return $("//a[text()='Cars']");
    }

    get locationDetailsLink() {
        return $("//a[text()='Location Details']");
    }

    get reportsLink() {
        return $("//a[text()='Reports']");
    }

    get promotionsLink() {
        return $("//a[text()='Promotions']");
    }

    get logOutLink() {
        return $("//a[text()='Log Out']");
    }




    clickNavHeader() {
        this.navigationHeader.isDisplayed();
        this.navigationHeader.click();
    }


    waitForPageTOLoad() {
        for (let i = 0; i < 5; i++) {
            var oldSource = browser.getPageSource();
            browser.pause(2000);
            if (oldSource === browser.getPageSource()) {
                break;
            }
        }
    }

/* 
    method Name : navigateToSideLinks
    return type : void 
    Parameters : method will accept one parameter i.e linkname like "dashboard","cars"...etc
    Purpose : purpose of this method is used to naviage left side navigation links in application .
*/

    navigateToSideLinks(linkName) {
        this.navigationHeader.isDisplayed();
        this.navigationHeader.click();
        this.waitForPageTOLoad();
        switch (linkName) {
            case "dashboard":
                browser.waitUntil(() => this.dashboardLink.isDisplayed());
                this.dashboardLink.click();
                this.waitForPageTOLoad();
                break;
            case "users":
                browser.waitUntil(() => this.usersLink.isDisplayed());
                this.usersLink.click();
                this.waitForPageTOLoad();
                break;
            case "reservations":
                browser.waitUntil(() => this.reservationsLink.isDisplayed());
                this.reservationsLink.click();
                this.waitForPageTOLoad();
                break;
            case "cars":
                browser.waitUntil(() => this.carsLink.isDisplayed());
                this.carsLink.click();
                this.waitForPageTOLoad();
                break;

            case "locationDetails":
                browser.waitUntil(() => this.locationDetailsLink.isDisplayed());
                this.locationDetailsLink.click();
                this.waitForPageTOLoad();
                break;

            case "reports":
                browser.waitUntil(() => this.reportsLink.isDisplayed());
                this.reportsLink.click();
                this.waitForPageTOLoad();
                break;

            case "promotions":
                browser.waitUntil(() => this.promotionsLink.isDisplayed());
                this.promotionsLink.click();
                this.waitForPageTOLoad();
                break;

            case "logout":
                browser.waitUntil(() => this.logOutLink.isDisplayed());
                this.logOutLink.click();
                this.waitForPageTOLoad();
                break;

        }

    }

} module.exports = Home;