
require("dotenv").config();

const Home= require("../page/Home.page.js");
const Signup= require("../page/Signup.page.js");
const logurl = process.env.LoginURL;
const home= new Home();
const signup= new Signup();


describe("validate",()=>{
it("validate",() =>{
browser.url(logurl);
home.clickLoginBtn();
browser.pause(3000);
home.clickBtnSignup();
browser.pause(10000);
});
})






