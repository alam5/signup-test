const { Base } = require("./base-page");
const { signupLocators } = require("../locators/signup-locators");
const { expect } = require("@playwright/test");
require("dotenv").config();

class SignupPage {
  constructor(page) {
    this.Base = new Base();
    this.page = page;
  }

  async gotoSignup() {
    await this.page.goto(
      "https://circula-qa-challenge.vercel.app/users/sign_up"
    );
  }

  async enterEmailAndPassword() {
    await this.page
      .locator(signupLocators.emailTextfield)
      .fill(process.env.TEST_WORK_EMAIL);
    await this.page
      .locator(signupLocators.passwordTextfield)
      .fill(process.env.TEST_PASSWORD);
  }

  async acceptAllCookies() {
    await this.page.waitForSelector(signupLocators.acceptAll);
    await this.page.click(signupLocators.acceptAll);
  }

  async chekTermsAndCondtion() {
    await this.page
      .getByText(signupLocators.termsAndCondCheckbox)
      .click({ position: { x: 0, y: 0 } });
  }

  async verifyEmail(email) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.emailTextfield),
      email
    );
  }

  async SubmitStep1() {
    await this.page
      .locator(signupLocators.TryforFreeBtn)
      .click(process.env.TEST_PASSWORD);
  }

  //---------Step 2 ------------------//
  async enterFirstName() {
    await this.page
      .locator(signupLocators.firstName)
      .fill(process.env.FIRST_NAME);
  }

  async enterLastName() {
    await this.page
      .locator(signupLocators.lastName)
      .fill(process.env.LAST_NAME);
  }

  async enterPhonenumber() {
    await this.page
      .locator(signupLocators.phonenumber)
      .fill(process.env.PHONENUMBER);
  }

  async verifyFirstName(fname) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.firstName),
      fname
    );
  }

  async verifyLastName(lname) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.lastName),
      lname
    );
  }

  async verfiyphoneNum(pnumber) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.phonenumber),
      pnumber
    );
  }

  async verifyenablestate(item) {
    await expect(this.page.locator(item)).toBeEnabled();
  }

  async SubmitStep2() {
    await this.page.locator(signupLocators.SubmitStep2).click();
  }

  //---------Step 3 ------------------//
  async enterCompanyName() {
    await this.page
      .locator(signupLocators.OrganizationName)
      .fill(process.env.ORGANIZATION_NAME);
  }

  async selectCountry() {
    await this.page.locator(signupLocators.RegisterCountry).click();
    await this.page.locator(signupLocators.RegisterCountry).clear();
    await this.page
      .locator(signupLocators.RegisterCountry)
      .type(process.env.COUNTRY);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  async selectChannel() {
    await this.page.locator(signupLocators.HearAboutUs).click();
    const channel = process.env.CHANNEL;
    const channelval = `//div[@data-valuetext='${channel}']`;
    await this.page.locator(channelval).click();
  }

  async verifyCompanyName(cname) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.OrganizationName),
      cname
    );
  }

  async verifyCountry(coname) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.RegisterCountry),
      coname
    );
  }

  async verifyChannelSelected(value) {
    await this.Base.verifyValue(
      this.page.locator(signupLocators.HearAboutUs),
      value
    );
  }

  async verifyEnableState(item) {
    await expect(this.page.locator(item)).toBeEnabled();
  }

  async SubmitStep3() {
    await this.page.locator(signupLocators.SubmitStep3).click();
  }

  async verifySuccessMessage(msg) {
    await this.Base.verifyText(
      this.page.locator(signupLocators.successMessage),
      msg
    );
  }
}
module.exports = { SignupPage };
