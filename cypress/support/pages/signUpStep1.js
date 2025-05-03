class StepOne {
  visit() {
    cy.visit('/users/sign_up');
  }

  acceptCookies() {
    cy.get('[data-testid="uc-accept-all-button"]')
      .should('be.visible')
      .click();
  }

  fillEmailField(email) {
    cy.get('input[name="email"]')
      .should('be.visible')
      .type(email);
  }

  fillPasswordField(password) {
    cy.get('input[name="password"]')
      .should('be.visible')
      .type(password);
  }

  acceptTerms() {
    cy.get('input[name="acceptTos"]')
      .should('be.visible')
      .check({ force: true });
  }

  clickSubmitButton() {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click();
  }
}

export const signUpStep1 = new StepOne();
