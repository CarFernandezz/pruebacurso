describe("login", () => {
  it("login", () => {
 cy.visit("https://ticketazo.com.ar/auth/registerUser");
 cy.get('.grid > :nth-child(1) > .relative > .inline-flex').click();
 cy.get('.grid > :nth-child(1) > .relative > .inline-flex').type('nicolas');
 cy.get('.grid > :nth-child(2) > .relative').click();
 cy.get('.grid > :nth-child(2) > .relative').type('aguero');
 cy.get(':nth-child(3) > .relative > .inline-flex').click();
 cy.get(':nth-child(3) > .relative > .inline-flex').type('3814830284');
 cy.get(':nth-child(4) > .relative > .inline-flex').click();
 cy.get(':nth-child(4) > .relative > .inline-flex').type('458625643');
 cy.get('[data-cy="select-provincia"]').click();
 cy.get('[data-cy="select-provincia"]').type("Buenos Aires{downarrow}{enter}");
 cy.get('[data-cy="select-localidad"]').click();
 cy.get('[data-cy="select-localidad"]').type("belgrano{downarrow}{enter}");
cy.get(':nth-child(8) > .relative > .inline-flex').click();
 cy.get(':nth-child(8) > .relative > .inline-flex').type('cualquiera@gmail.com');
 cy.get(':nth-child(9) > .relative > .inline-flex').click();
  cy.get(':nth-child(9) > .relative > .inline-flex').type('cualquiera@gmail.com');
  cy.get(':nth-child(10) > .relative').click();
  cy.get(':nth-child(10) > .relative').type('123456');
  cy.get(':nth-child(11) > .relative > .inline-flex').click();
  cy.get(':nth-child(11) > .relative > .inline-flex').type('123456');
 cy.get('[data-cy="btn-registrarse"]').click();
  cy.get('[data-has-helper="true"] > .hidden').should('be.visible');
});
});