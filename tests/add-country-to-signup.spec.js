const { test } = require("@playwright/test");
const { SignupPage } = require("../pages/signup-page");
const { signupLocators } = require("../locators/signup-locators");
const { CirculaStaging } = require("../state/state-staging");
const { sign } = require("crypto");

test.describe("Circula Signup", () => {
  let page;
  let signup;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    signup = new SignupPage(page);
  });

  test("Signup Step1", async () => {
    await signup.gotoSignup();
    await signup.acceptAllCookies();
    await signup.enterEmailAndPassword();
    await signup.chekTermsAndCondtion();
    await signup.verifyEmail(process.env.TEST_WORK_EMAIL);
    await signup.SubmitStep1();

    //----------Step 2 ------------------------//

    await signup.enterFirstName();
    await signup.enterLastName();
    await signup.enterPhonenumber();

//----------Verifying Step 2 data------------------//
    await signup.verifyFirstName(process.env.FIRST_NAME);
    await signup.verifyLastName(process.env.LAST_NAME);
    await signup.verfiyphoneNum(process.env.PHONENUMBER);
    await signup.verifyEnableState(signupLocators.SubmitStep2);

    await signup.SubmitStep2();

//-------------Step 3 --------------------------------//
    await signup.enterCompanyName();
    await signup.selectCountry(); //Sweden Country is selected here
    await signup.selectChannel();

    await signup.verifyCompanyName(process.env.ORGANIZATION_NAME);
    await signup.verifyCountry(process.env.COUNTRY);
    await signup.verifyChannelSelected(process.env.CHANNEL);
    await signup.verifyEnableState(signupLocators.SubmitStep3);

    await signup.SubmitStep3()
    
//-----------Verify Account created sucessfully------------------//

    await signup.verifySuccessMessage(process.env.SUCCESS_MESSAGE);
  });

  test.afterAll(async () => {
    await page.close();
  });
});
