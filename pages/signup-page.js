const { Base } = require("./base-page");
const { signupLocators } = require("../locators/signup-locators");
const { expect } = require("@playwright/test");
const { signupData } = require("../data-factory/signup-data");
require("dotenv").config();

class SignupPage {
  constructor(page) {
    this.Base = new Base();
    this.page = page;
  }

  async gotoSignup() {
    await this.page.goto(
      process.env.BASE_URL
    );
  }

  async enterEmailAndPassword() {
    await this.page
      .locator(signupLocators.emailTextfield)
      .fill(signupData.test_work_email);
    await this.page
      .locator(signupLocators.passwordTextfield)
      .fill(signupData.test_password);
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
      .click();
  }

  //---------Step 2 ------------------//
  async enterFirstName() {
    await this.page
      .locator(signupLocators.firstName)
      .fill(signupData.first_name);
  }

  async enterLastName() {
    await this.page
      .locator(signupLocators.lastName)
      .fill(signupData.last_name);
  }

  async enterPhonenumber() {
    await this.page
      .locator(signupLocators.phonenumber)
      .fill(signupData.phone_number);
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
      .fill(signupData.organization_name);
  }

  async selectCountry() {
    await this.page.locator(signupLocators.RegisterCountry).click();
    await this.page.locator(signupLocators.RegisterCountry).clear();
    await this.page.locator(signupLocators.RegisterCountry).type(signupData.country);
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press("ArrowDown");
   await this.page.keyboard.press("Enter");
  }

  async selectChannel() {
    await this.page.locator(signupLocators.HearAboutUs).click();
    const channel = signupData.channel;
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
