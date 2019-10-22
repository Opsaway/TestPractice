
require("dotenv").config();

const Login = require("../page/login.page.js");
const Home= require("../page/Home.page.js");
const LocationDetails= require("../page/locationDetails.page.js");

const login = new Login();
const home= new Home();
const locDeatils= new LocationDetails();
let envUrl;
if(process.env.ENVIROMENT == "QA"){
  envUrl=process.env.QA_URL;
}else{
  envUrl=process.env.STG_URL;
}



describe("Validating login functionality ", () => {

  it("test_login With valid details", () => {
    browser.url(envUrl);
    login.login(process.env.adminUser,process.env.adminPassword,true);
    expect(true).toBe(login.pageTitle.getText().includes('Hello,'), "user not logged in to application");
    home.navigateToSideLinks("locationDetails");
    locDeatils.selectLocation("Austin");
    locDeatils.clickFleetMgmtTab();
  });


})


