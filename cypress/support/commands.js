// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Command to generate a unique email
Cypress.Commands.add('generateEmail', () => {
    const timestamp = new Date().getTime();
    return `test_${timestamp}@test.com`;
  });
  
  // Command to generate a unique password
  Cypress.Commands.add('generatePassword', () => {
    const timestamp = new Date().getTime();
    return `qwerty${timestamp}`;
  });
  
  // Command to generate a random phone number
  Cypress.Commands.add('generatePhoneNumber', () => {
    const randomDigits = Math.floor(Math.random() * 1000000000);
    return `017${randomDigits}`;
  });
  