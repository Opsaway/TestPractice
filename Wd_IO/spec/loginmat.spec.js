
require("dotenv").config();

const Home= require("../page/Homemat.page.js");
const Signup= require("../page/Signupmat.page.js");
const Login= require("../page/loginmat.page.js");
const logurl = process.env.LoginURL;
const home= new Home();
const signup= new Signup();
const login= new Login();
const userName="sravan.chintu68@gmail.com";
const password="Shravan69"

describe("validate to signin",()=>{
    it("verify enter signin details",() =>{
    browser.url(logurl);
    home.clickLoginBtn();
    login.signin(userName, password);
    login.buttonSignin.click();
    
});
})


