

class SignUp{

  
  get SignInbutton()
  {
    return $("//a[text()='Login']");
  }
  get SIgnupbutton(){
    return $("//a[text()='Sign up']");
  }
  
  get donateHeaderButton(){
  
    return $("(//a[text()='Donate'])[last()-1]");
  }
  
  get lastDonateButton(){
  
    return $("(//a[text()='Donate'])[last()]");
  }
  
  get learnerButton(){

    return $("//button[text()='Learner']");
  }
 get teacherButton(){

  return $("//button[text()='Teacher']");
 }
 get parentButton(){

  return $("//button[text()='Parent']");
 }

 get monthPicker(){

  return $("//select[@name='birth[month]']");
 }
 get dayPicker(){

  return $("//select[@name='birth[day]']");
 }

get yearPicker(){

  return $("//select[@name='birth[year]']");
 }
 get signUpbyusername(){

  return $("//div[text()='Sign up by choosing a username']");
 }
 get signupEmail(){

  return $("//input[@type='email']");
 }

 get signupuserName(){

  return $("//input[@type='text']");
 }

 get createPassword(){
   return $("//input[@type='password']");
 }
 get postsignup(){

  return $("//div[text()='Sign up']");
 }

get UserName(){

  return $("//span[@data-test-id='header-profile-button']/span");
}

get logoutButton(){

  return $("//a[text()='Log out']");
}

get classname(){

  return $("label[data-test-id='grade-picker-item-0-11']>div");
}

get continuebutton(){

  return $("(//button//div[text()='Continue'])[1]");
}
get coursename(){
  return $("//label[contains(.,'Grammar')]//input");
}

get clickContinuecoursebutton(){

  return $("//button[contains(.,'Continue with')]//div");
}
////////////////////////////////////////////

 clickSignupButton ()
 {
     browser.waitUntil(() => this.SIgnupbutton.isDisplayed());
     this.SIgnupbutton.click();
 }

 clickparentButton(){
  browser.waitUntil(() => this.parentButton.isDisplayed());
  this.parentButton.click();
}
clickTeacherButton(){
  browser.waitUntil(() => this.teacherButton.isDisplayed());
  this.teacherButton.click();

}
clickLearnerButton(){
  browser.waitUntil(() => this.learnerButton.isDisplayed());
  this.learnerButton.click();
}
clickMonthpicker(){
  browser.waitUntil(() => this.monthPicker.isDisplayed());
  this.monthPicker.click();
  this.monthPicker.selectByIndex(8);
}
clickdaypicker(){
  browser.waitUntil(() => this.dayPicker.isDisplayed());
  this.dayPicker.click();
  this.dayPicker.selectByIndex(8);
}

clickyearpicker(){
  browser.waitUntil(() => this.yearPicker.isDisplayed());
  this.yearPicker.click();
  this.yearPicker.selectByIndex(8);
}

clicksignupbyuserName(){
  browser.waitUntil(() => this.signUpbyusername.isDisplayed());
  this.signUpbyusername.click();
}
entersignupEmail(email){
  browser.waitUntil(() => this.signupEmail.isDisplayed());
  this.signupEmail.click();
  this.signupEmail.clearValue();
  this.signupEmail.setValue(email);

}
enterSignupUserName(name){
  browser.waitUntil(() => this.signupuserName.isDisplayed());
  this.signupuserName.click();
  this.signupuserName.clearValue();
  this.signupuserName.setValue(name);

}
enterSignPassword(password){
  browser.waitUntil(() => this.createPassword.isDisplayed());
  this.createPassword.click();
  this.createPassword.clearValue();
  this.createPassword.setValue(password);

}
clickPostSignUp(){
  this.postsignup.click();
}



clickClassName(){
  browser.execute(function () {
    document.querySelector('label[data-test-id="grade-picker-item-0-11"]').scrollIntoView();
  });
  this.classname.click();
}

clickContinueButton(){
  browser.waitUntil(() => this.continuebutton.isDisplayed());
  this.continuebutton.click();
}
clickCourseName(){
  browser.execute(function () {
    document.querySelector('div[class="_wgmchy"]:nth-child(4)').scrollIntoView();
  });
  browser.pause(2000);
  this.coursename.click();
}

clickCourseContinueButton(){
  browser.waitUntil(() => this.clickContinuecoursebutton.isDisplayed());
  this.clickContinuecoursebutton.click();
}

clickUserNameText(username){
  browser.waitUntil(() => this.UserName.isDisplayed());
  expect(this.UserName.getText()).toBe(username, "user name is not getting displayed");
  this.UserName.click();
}
clickLogoutButton(){
  browser.waitUntil(() => this.logoutButton.isDisplayed());
  this.logoutButton.click();
}
/////////////////////////////////////
 validateSignup(email, name, password, username){

  this.clickSignupButton();
  this.clickparentButton();
  this.clickTeacherButton();
  this.clickLearnerButton();
 this.clickMonthpicker();
 this.clickdaypicker();
 this.clickyearpicker();
 this.clicksignupbyuserName();
 this.entersignupEmail(email);
 this.enterSignupUserName(name);
 this.enterSignPassword(password);
this.clickPostSignUp();
browser.pause(10000);

this.clickClassName();
this.clickContinueButton();
this.clickCourseName();
this.clickCourseContinueButton();
browser.pause(3000);
this.clickUserNameText(username);
this.clickLogoutButton();
 }



}module.exports = SignUp;

