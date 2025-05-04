## Overview

This repository contains solutions for the Circula assignment. The challenge consists of creating detailed checklists and a few automated tests to verify various functionalities for the Circula app. The tasks cover web, Android, and iOS platforms.

## Contents

- **Automated Tests**: Written in JavaScript using Cypress with Page Object Model (POM).
- **Environment**: The tests are designed to run on the Testing environment.
- **Checklists**: Located in the `docs` folder, they contain the necessary verifications for each task's functionality.

---

## Task 1: Web - Add Country to Sign-up Dropdown

**Description**: On the Sign-up page, Sweden needs to be added as an option to the "Where’s your company registered?" dropdown.

### Acceptance Criteria:

- Add Sweden as a selectable country option in the dropdown.

---

## Task 2: Android - Error Message for Character Limit in Purpose Field

**Description**: Currently, when trying to save or submit an expense for which the purpose field has more than 1,000 characters, we’re showing a generic error that doesn’t tell the end user what’s the actual problem. Implement an error message to properly handle this case.

### Acceptance Criteria:

- Display a character counter once 500 characters are reached.
- The character limit is 1000, but the field is still editable.
- The validation occurs when typing, so when it is over 1000 characters, the field changes to an error state and the CTA will be disabled. Once the field is adjusted and is less than 1000 characters, it goes back to editing style (not red) and the CTA is active again.
- Suggestions shouldn’t be displayed after the text surpasses 100 characters.

---

## Task 3: iOS - Strong Password Policy

**Description**: Update the password policy for increased security. The new password must meet specific criteria (min 8 characters, at least 1 letter, and at least 1 number). The user must enter their old password before proceeding.

### Acceptance Criteria:

- The old (current) password needs to be added.
- The new password must be added and follow the following criteria:
    - It must be min 8 characters.
    - It must have at least one numerical character.
    - It must have at least one letter.
- The CTA is activated after the old password is added and the new password fulfills all the criteria.
- The validation of the old password is triggered after the user clicks on the CTA.
- If the password added is wrong – the error message is shown as per design.
- In the success case – the success message is shown and the user is navigated to the settings page
---
### Documentation
Detailed checklists for each task are stored in the docs folder.
---
## Setup Instructions

### Prerequisites:

- **Node.js**: Ensure you have Node.js installed on your system.

### Installation Steps:

1. Clone the repository
2. Navigate into the project directory
3. Install the dependencies (this includes Cypress):
   `npm install`
4. Run Cypress tests:
   `npx cypress open`