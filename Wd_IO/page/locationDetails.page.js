const Home= require("../page/Home.page.js");
const home= new Home();


class LocationDetails{

get locationDropDown(){
    return $("#select_2");
}

get createLocButton(){
    return $("//span[contains(text(),'Create Location')]/..");
}

get austinLoc(){
    return $("//div[contains(text(),'Austin')]/parent::md-option[contains(@ng-repeat,'active: true')]");
}

get  bostonLoc(){
    return $("//div[contains(text(),'Boston')]/parent::md-option[contains(@ng-repeat,'active: true')]");
}

get locationDetailsTab(){
    return $("//h3[contains(text(),'Location Details')]/ancestor::div[3]/a");
}

get fleetManagementTab(){
    return $("//h3[contains(text(),'Fleet Management')]/ancestor::div[3]/a");
}


selectLocation(location){
    browser.waitUntil(() => this.locationDropDown.isDisplayed());
    this.locationDropDown.click();
    switch(location){

        case "Austin":
            browser.waitUntil(() => this.austinLoc.isDisplayed());
            this.austinLoc.click();
            home.waitForPageTOLoad();
            break;
        case "Boston":
            browser.waitUntil(() => this.bostonLoc.isDisplayed());
             this.bostonLoc.click();
             home.waitForPageTOLoad();
            break;
    }
}

clickFleetMgmtTab(){
    browser.waitUntil(() => this.fleetManagementTab.isDisplayed());
    this.fleetManagementTab.click();
    
    
    
}


}module.exports=LocationDetails;