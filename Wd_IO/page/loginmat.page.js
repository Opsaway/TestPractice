class Login{

    get inputUserEmail(){
        return  $("//input[@id='email']");
    }

    get inputPassword(){
        return  $("//input[@type='password']");
    }


    get buttonSignin(){
        return $("//input[@id='signin']");
    }
    
    
    signin(userName,password){

        browser.waitUntil(() => this.inputUserEmail.isDisplayed());
        this.inputUserEmail.setValue(userName);
        browser.waitUntil(() => this.inputPassword.isDisplayed());
        this.inputPassword.setValue(password);
        browser.waitUntil(() => this.buttonSignin.isDisplayed());
        
        }

    }module.exports = Login;

    
    



  
