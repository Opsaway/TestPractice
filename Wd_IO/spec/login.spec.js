
require("dotenv").config();


const SignUp = require("../page/Home.Page.js");

const signup = new SignUp();


const envUrl = process.env.WebUrl;
const email = "sumanthvarma"+ Math.floor(Math.random() * 999999)+"@gmail.com";
const password = process.env.PassWord;
const name = "sumanth"+ Math.floor(Math.random() * 999999)

describe("Validating Signup functionality", () => {
  it("validating getstarted click", () => {
    browser.url(envUrl);                                                                    
    signup.validateSignup(email, name, password, name);
      });



  })
