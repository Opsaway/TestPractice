class Login{

    get inputUserEmail(){
        return  $("//input[@type='email']");
    }

    get inputPassword(){
        return  $("//input[@type='password']");
    }


    get buttonLogin(){
        return $("//input[@value='Log In']");
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
