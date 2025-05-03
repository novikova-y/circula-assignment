class StepThree {
  fillOrganizationNameField(name) {
    cy.get('input[name="organizationName"]').type(name);
    cy.get('input[name="organizationName"]').should('have.value', name);
  }

  selectCountryDropdown(country) {
    cy.get('input[name="country"]').click();
    cy.get('li').contains(country).scrollIntoView().click();
    cy.get('input[name="country"]').should('have.value', country);
  }

  clearCountry() {
    cy.get('input[name="country"]').clear({ force: true });
  }

  searchCountry(partialName, fullCountryName) {
    cy.get('input[name="country"]').click({ force: true }).clear({ force: true }).type(partialName, { delay: 100 });
    cy.contains('li', fullCountryName, { timeout: 5000 }).should('be.visible').click();
    cy.get('input[name="country"]').should('have.value', fullCountryName);
  }

  selectChannelDropdown(channel) {
    cy.get('input[name="hdyhau"]').click();
    cy.get('[role="menu"]').contains(channel).click();
    cy.get('input[name="hdyhau"]').should('have.value', channel);
  }

  clickBackButton() {
    cy.get('button[type="button"]').click();
  }

  clickCreateAccountButton() {
    cy.get('button[type="submit"]').click();
  }
}

export const signUpStep3 = new StepThree();
