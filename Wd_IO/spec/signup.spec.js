

require("dotenv").config();

const Home= require("../page/Home.page.js");
const Signup= require("../page/Signup.page.js");
const logurl = process.env.LoginURL;
const home= new Home();
const signup= new Signup();

const firstname="shravan";
const lastname="matla";
const jobtitle="qaengineer";
const company="OpsAway";
const phonenumber="9703891203";
const email="sravan.chintu68@gmail.com";
const password="Shravan69";
const confirmpassword="Shravan69";
describe("validate to sigup",()=>{
it("verify enter sigup details",() =>{
browser.url(logurl);
home.clickLoginBtn();
browser.pause(3000);
home.clickBtnSignup();
browser.pause(10000);
signup.enterSignupDetails(firstname,lastname,jobtitle,company,phonenumber, email, password, confirmpassword,);
signup.enterConfirmactBtn();
});

})


