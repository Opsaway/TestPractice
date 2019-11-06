class Home {
    get btnlogin() {
        return $("//a[text()='LogIn']")
    }
    get btnsignup() {
        return $("//a[text()='Not a subscriber? Sign up now.']")
    }

    clickLoginBtn() {
        this.btnlogin.isDisplayed();
        this.btnlogin.click();
    }
    clickBtnSignup() {
        this.btnsignup.isDisplayed();
        this.btnsignup.click();
    }

} module.exports = Home;
