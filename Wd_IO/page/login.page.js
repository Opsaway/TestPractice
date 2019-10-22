class Login{

    get inputUserEmail(){
        return  $("[name='email']");
    }

    get inputPassword(){
        return  $("[name='password']");
    }

    get linkForgotPwd(){
        return $('//a[text()="Forgot Password"]');
    }

    get buttonLogin(){
        return $("//span[text()='Log In']/ancestor::button");
    }
    get pageHeader() {
        return $("//span[contains(@class,'title-text')]");
    }

    get pageTitle(){
        return $("//main[@class='dashboard-container']");
    }

    get input(){
        return $("//label[text()='First Rentable Date']/parent::div//input");
    }
    
    login(userName,password,flag){

        browser.waitUntil(() => this.inputUserEmail.isDisplayed());
        this.inputUserEmail.setValue(userName);
        this.inputPassword.setValue(password)
        this.buttonLogin.click();
        waitForPageTOLoad();
        if(flag == true){
            browser.waitUntil(() => {
                return this.pageTitle.getText().length  > 0 
              }, 20000, 'user not logged in to application ')
        }

    }

    
    


}module.exports = Login;

function waitForPageTOLoad(){
    for (let i=0;i<5;i++){
        var oldSource=browser.getPageSource();
        browser.pause(2000);
        if(oldSource === browser.getPageSource()){
          break;
        }
      }
  }