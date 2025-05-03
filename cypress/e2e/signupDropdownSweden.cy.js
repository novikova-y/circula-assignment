// Summary: Web: Add country to sign-up dropdown
// Description: Sign-up page: Please add Sweden as an option to the “Where’s your company registered?” dropdown

import { signUpStep1 } from '../support/pages/signUpStep1';
import { signUpStep2 } from '../support/pages/signUpStep2';
import { signUpStep3 } from '../support/pages/signUpStep3';

describe('New Sweden Option in Country Dropdown', () => {
  beforeEach(() => {
    // Generating test data
    cy.generateEmail().then((uniqueEmail) => {
      cy.generatePassword().then((password) => {
        cy.generatePhoneNumber().then((phoneNumber) => {
        // Step 1
        signUpStep1.visit();
        cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Start your 14-day free trial');
        signUpStep1.acceptCookies();
        
        signUpStep1.fillEmailField(uniqueEmail);
        signUpStep1.fillPasswordField(password);
        signUpStep1.acceptTerms();
        signUpStep1.clickSubmitButton();

        // Step 2
        cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Your contact details');
        signUpStep2.fillFirstNameField('Yulia');
        signUpStep2.fillLastNameField('Novikova');
        signUpStep2.fillPhoneField(phoneNumber);
        signUpStep2.clickSubmitButton();

        // Check Step 3 title
        cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Company information');
      });
    });
  });
});

  it('should display Germany as a default country', () => {
    cy.get('input[name="country"]').should('have.value', 'Germany');
  });

  it('should contain "Sweden" in the country dropdown list', () => {
    // Check if the 'Sweden' option is available in the dropdown list
    signUpStep3.selectCountryDropdown('Sweden');
    cy.get('input[name="country"]').should('have.value', 'Sweden');
  });

  it('should allow form submission after selecting "Sweden"', () => {
    // Check if user can submit the form after selecting the 'Sweden' option
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Sweden');
    signUpStep3.selectChannelDropdown('Social Media (LinkedIn, Instagram, etc.)');
    signUpStep3.clickCreateAccountButton();

    // Check if the account was successfully created
    cy.contains('Great! Now please verify your email').should('exist');
  });

  it('should show error when "Where’s your company registered?" field is empty', () => {
    // Check if an error message appears when the 'country' field is empty
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Germany');
    signUpStep3.clearCountry();
    signUpStep3.clickCreateAccountButton();

    cy.contains('Company registration country is required').should('exist');
  });

  it('should have "Sweden" after navigating to Step 2 and back', () => {
    // Check if the 'Sweden' option is saved while navigating Sign Up form
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Sweden');
    signUpStep3.selectChannelDropdown('Social Media (LinkedIn, Instagram, etc.)');
    signUpStep3.clickBackButton();
    signUpStep2.clickSubmitButton();

    cy.get('input[name="country"]').should('have.value', 'Sweden');
  });

  it('should allow the user to search for "Sweden" by typing "Swe" in the dropdown', () => {
    // Check if user can search for the 'Sweden' option by typing
    signUpStep3.searchCountry('Swe', 'Sweden'); 
    cy.get('input[name="country"]').should('have.value', 'Sweden');
  });

  it('should allow form submission after selecting country other than "Sweden"', () => {
    // Check if user can submit the form after selecting an option other than 'Sweden'
    signUpStep3.fillOrganizationNameField('Yulia');
    signUpStep3.selectCountryDropdown('Switzerland');
    signUpStep3.selectChannelDropdown('Social Media (LinkedIn, Instagram, etc.)');
    signUpStep3.clickCreateAccountButton();

    cy.contains('Great! Now please verify your email').should('exist');
  });
});
