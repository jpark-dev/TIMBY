describe("Navigation", () => {

  beforeEach(() => {
    localStorage.setItem('userID', 7);
  });

  it("should visit root", () => {
    cy.visit('/');
  });

  it("should navigate to the bookings page and view booking details", () => {
    cy.visit('/');
    cy.get('.menu-button')
      .click();

    cy.get("span").contains('Bookings')
      .click();

    cy.contains('Bookings').should('be.visible');

    cy.contains('Details').first().click();
    cy.contains('Tour de Breweries').should('be.visible');

    cy.contains('Cancel Booking').click();
    cy.contains('Are you sure you want to cancel this booking?').should('be.visible');

    cy.contains('Back').click();

    cy.get('.close-button').click();
    cy.contains('Tour de Breweries').should('be.visible');

  });

  it("should navigate to the listings page and view listing details", () => {
    cy.visit('/');
    cy.get('.menu-button')
      .click();

    cy.get("span").contains('Listings')
      .click();

    cy.contains('Listings').should('be.visible');
  });

  it("should navigate to the profile page", () => {
    cy.visit('/');
    cy.get('.menu-button')
      .click();

    cy.get("span").contains('Profile')
      .click();

    cy.contains('Dexter').should('be.visible');
  });

  it("should view all notifications for current user", () => {
    cy.visit('/bookings');

    cy.get('.notifications-button').click();
    cy.get('.notification').first().should('be.visible');

    cy.get('.notifications-button').click();
    cy.contains('Notifications').should('not.be.visible');

  })
});