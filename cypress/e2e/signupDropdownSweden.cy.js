// Summary: Web: Add country to sign-up dropdown
// Description: Sign-up page: Please add Sweden as an option to the “Where’s your company registered?” dropdown

import { signUpStep1 } from '../support/pages/signUpStep1';
import { signUpStep2 } from '../support/pages/signUpStep2';
import { signUpStep3 } from '../support/pages/signUpStep3';

describe('New Sweden Option in Country Dropdown', () => {
  let uniqueEmail, password, phoneNumber;

  beforeEach(() => {
    // Generate test data before each test case
    cy.generateEmail().then((email) => {
      uniqueEmail = email;
    });

    cy.generatePassword().then((pwd) => {
      password = pwd;
    });

    cy.generatePhoneNumber().then((phone) => {
      phoneNumber = phone;
    });

    cy.then(() => {
      // Step 1 - Sign-up page
      signUpStep1.visit();
      cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Start your 14-day free trial');
      signUpStep1.acceptCookies();

      signUpStep1.fillEmailField(uniqueEmail);
      signUpStep1.fillPasswordField(password);
      signUpStep1.acceptTerms();
      signUpStep1.clickSubmitButton();

      // Step 2 - Contact details
      cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Your contact details');
      signUpStep2.fillFirstNameField('Yulia');
      signUpStep2.fillLastNameField('Novikova');
      signUpStep2.fillPhoneField(phoneNumber);
      signUpStep2.clickSubmitButton();

      // Step 3 - Company information
      cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Company information');
    });
  });

  it('should display Germany as a default country', () => {
    // Verify that "Germany" is preselected in the dropdown
    cy.get('input[name="country"]').should('have.value', 'Germany');
  });

  it('should contain "Sweden" in the country dropdown list', () => {
    // Ensure that "Sweden" is available in the dropdown and can be selected
    signUpStep3.selectCountryDropdown('Sweden');
    cy.get('input[name="country"]').should('have.value', 'Sweden');
  });

  it('should allow form submission after selecting "Sweden"', () => {
    // Submit the form successfully with "Sweden" selected
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Sweden');
    signUpStep3.selectChannelDropdown('Social Media (LinkedIn, Instagram, etc.)');
    signUpStep3.clickCreateAccountButton();

    cy.contains('Great! Now please verify your email').should('exist');
  });

  it('should show error when "Where’s your company registered?" field is empty', () => {
    // Leave the country field empty and verify the error message
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Germany');
    signUpStep3.clearCountry();
    signUpStep3.clickCreateAccountButton();

    cy.contains('Company registration country is required').should('exist');
  });

  it('should have "Sweden" after navigating to Step 2 and back', () => {
    // Verify that the "Sweden" selection is preserved when navigating between steps
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Sweden');
    signUpStep3.selectChannelDropdown('Social Media (LinkedIn, Instagram, etc.)');
    signUpStep3.clickBackButton();
    signUpStep2.clickSubmitButton();

    cy.get('input[name="country"]').should('have.value', 'Sweden');
  });

  it('should allow the user to search for "Sweden" by typing "Swe" in the dropdown', () => {
    // Verify that the user can search for "Sweden" by typing part of the name
    signUpStep3.searchCountry('Swe', 'Sweden');
    cy.get('input[name="country"]').should('have.value', 'Sweden');
  });

  it('should allow form submission after selecting a country other than "Sweden"', () => {
    // Submit the form successfully with a country other than "Sweden" selected
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Switzerland');
    signUpStep3.selectChannelDropdown('Social Media (LinkedIn, Instagram, etc.)');
    signUpStep3.clickCreateAccountButton();

    cy.contains('Great! Now please verify your email').should('exist');
  });
});
