class StepTwo {
  verifyTitle() {
    cy.get('h1.sc-b4bf297b-0.ijnzwf').should('have.text', 'Your contact details');
  }

  fillFirstNameField(name) {
    cy.get('input[name="firstname"]').type(name);
  }

  fillLastNameField(name) {
    cy.get('input[name="lastname"]').type(name);
  }

  fillPhoneField(phone) {
    cy.get('input[name="phoneNumber"]').type(phone);
  }

  clickSubmitButton() {
    cy.get('button[type="submit"]').click();
  }
}

export const signUpStep2 = new StepTwo();
