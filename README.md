# circula-signup-test
## This repo is autoamte the signup workflow of circula app and verify few cases.

### This project is implemented and followed Page Object Model.
- Pages folder contains Base and Signup pages, contains all the verficaiton fucntions  
- Tests folder contains all the tests and actions for signup workflows
- Locators folder contains all the elements locators used for signup page.
- Data-factory contains data required for input
- .ENV file contains Base URL for testing.

### To execute follow these step.
1. Run npm install command // it will install the dev dependenices and playwright
2. Run npx playwright install // to install browsers as well.
3. Before running test go data-factory > signup-data.js file and update test_work_email. 
4. Run npx playwright test --project chromium to run headless for chrome only.
