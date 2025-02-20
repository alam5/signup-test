const { test } = require("@playwright/test");
const { SignupPage } = require("../pages/signup-page");
const { signupLocators } = require("../locators/signup-locators");
const { signupData } = require("../data-factory/signup-data");

test.describe("Circula Signup process", () => {
  let page;
  let signup;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    signup = new SignupPage(page);
  });

  test("Signup flow in three steps", async () => {
    await signup.gotoSignup();
    await signup.acceptAllCookies();
    await signup.enterEmailAndPassword();
    await signup.chekTermsAndCondtion();
    await signup.verifyEmail(signupData.test_work_email);
    await signup.SubmitStep1();

    //----------Step 2 ------------------------//

    await signup.enterFirstName();
    await signup.enterLastName();
    await signup.enterPhonenumber();

//----------Verifying Step 2 data------------------//
    await signup.verifyFirstName(signupData.first_name);
    await signup.verifyLastName(signupData.last_name);
    await signup.verfiyphoneNum(signupData.phone_number);
    await signup.verifyEnableState(signupLocators.SubmitStep2);

    await signup.SubmitStep2();

//-------------Step 3 --------------------------------//
    await signup.enterCompanyName();
    await signup.selectCountry(); //Sweden Country is selected here
    await signup.selectChannel();

    await signup.verifyCompanyName(signupData.organization_name);
    await signup.verifyCountry(signupData.country);
    await signup.verifyChannelSelected(signupData.channel);
    await signup.verifyEnableState(signupLocators.SubmitStep3);

    await signup.SubmitStep3()
    
//-----------Verify Account created sucessfully------------------//

    await signup.verifySuccessMessage(signupData.success_message);
  });

  test.afterAll(async () => {
    await page.close();
  });
});
