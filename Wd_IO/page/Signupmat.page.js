class Signup {
    get firstNameInput() {
        return $("//input[@name='first_name']")
    }
    get lastnameInput() {
        return $("//input[@id='last_name']")
    }
    get jobtitleInput() {
        return $("//input[@id='job_title']")
    }
    get companyInput() {
        return $("//input[@id='company']")
    }
    get phonenumberInput() {
        return $("//input[@name='phone_number']")
    }
    get emailaddressInput(){
        return $("//input[@name='signup-email']")
    }
    get passwordInput(){
        return $("//input[@id='signup-password']")
    }
    get confirmpasswordInput(){
        return $("//input[@id='confirm-password']")
    }
    get confirmaccountBtn(){
        return $("//input[@name='next']")
    }

    clickLoginBtn() {
        this.btnlogin.isDisplayed();
        this.btnlogin.click();
    }
    clickBtnSignup() {
        this.btnsignup.isDisplayed();
        this.btnsignup.click();
    }
    enterFirstName(userFirstName) {
        browser.waitUntil(() => this.firstNameInput.isDisplayed());
        this.firstNameInput.setValue(userFirstName);
    }
    enterLastName(userLastName) {
        browser.waitUntil(() => this.lastnameInput.isDisplayed());
        this.lastnameInput.setValue(userLastName);
    }
    enterJobtitle(userJobtitle) {
        browser.waitUntil(() => this.jobtitleInput.isDisplayed());
        this.jobtitleInput.setValue(userJobtitle);
    }
    enterCompany(userCompanyName) {
        browser.waitUntil(() => this.companyInput.isDisplayed());
        this.companyInput.setValue(userCompanyName);
    }
    enterPhoneNumber(userPhoneNumber) {
        browser.waitUntil(() => this.phonenumberInput.isDisplayed());
        this.phonenumberInput.setValue(userPhoneNumber);
    }
    enterEmailAddress(userEmail){
        browser.waitUntil(() => this.emailaddressInput.isDisplayed());
        this.emailaddressInput.setValue(userEmail);
    }
    enterPassword(userPassword){
        browser.waitUntil(() => this.passwordInput.isDisplayed());
        this.passwordInput.setValue(userPassword);
    }
    enterConfirmPassword(userconfirmPassword){
    browser.waitUntil(() => this.confirmpasswordInput.isDisplayed());
        this.confirmpasswordInput.setValue(userconfirmPassword);
    }
    enterConfirmactBtn(button){
        browser.waitUntil(() => this.confirmaccountBtn.isDisplayed());
        this.confirmaccountBtn.click();
    }

    enterSignupDetails(firstname,lastname,jobtitle,company,phonenumber, email, password, confirmpassword) {
        this.enterFirstName(firstname);
        this.enterLastName(lastname);
        this.enterJobtitle(jobtitle);
        this.enterCompany(company);
        this.enterPhoneNumber(phonenumber);
        this.enterEmailAddress(email);
        this.enterPassword(password);
        this.enterConfirmPassword(confirmpassword);
        
    }
}
module.exports = Signup;
