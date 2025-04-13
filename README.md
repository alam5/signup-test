# signup-test
## This repo is autoamte the signup workflow of circula app and verify few cases.

### This project is implemented and followed Page Object Model.
- Pages folder contains Base and Signup pages, contains all the verficaiton fucntions  
- Tests folder contains all the tests and actions for signup workflows
- Locators folder contains all the elements locators used for signup page.
- Data-factory contains data required for input# Signup Test Automation for Circula App

 ## Overview

This repository contains automated end-to-end tests for the user signup workflow of the Circula application. The tests are built using [Playwright](https://playwright.dev/) and follow the Page Object Model (POM) design pattern for better maintainability and readability.

The primary goal is to automate the signup process and verify key scenarios to ensure its functionality.

## Key Features

* Automates the Circula application signup workflow.
* Uses Playwright for robust and reliable browser automation.
* Follows the Page Object Model (POM) structure.
* Provides clear separation of tests, page objects, locators, and test data.
* Configurable base URL via environment variables.

## Project Structure

The project is organized using the Page Object Model (POM) pattern:
- `.env` file contains Base URL for testing.

# To execute follow these step.
1. Run `npm install` command // it will install the dev dependenices and playwright
2. Run `npx playwright` install // to install browsers as well.
3. Before running test go data-factory > `signup-data.js` file and update `test_work_email`. 
4. Run `npx playwright test --project chromium` to run headless for `chrome` only.
5. Run `npx playwright show-report` to check for the results.
