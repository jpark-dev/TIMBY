describe("Navigation", () => {

  beforeEach(() => {
    localStorage.setItem('userID', 7);
  });

  it("should visit root", () => {
    cy.visit('/');
  });

  it("should visit the search page and book a tour", () => {
    cy.visit('/');

    cy.contains('Book').should('be.visible');

    cy.contains('Book').click();

    cy.get('[aria-label=Book]').should('be.visible');
    cy.get('[aria-label=Book]').click();
    cy.get('[aria-label=Close]').click();

    cy.get('.menu-button').click();
    cy.get("span").contains('Bookings').click();

    cy.contains('Tour de Breweries').should('be.visible');

  });

  it("should navigate to the bookings page and cancel a booking", () => {
    cy.visit('/');
    cy.get('.menu-button').click();
    cy.get("span").contains('Bookings').click();

    cy.contains('Bookings').should('be.visible');

    cy.contains('Details').first().click();
    cy.contains('Tour de Breweries').should('be.visible');

    cy.contains('Cancel Booking').click();
    cy.contains('Are you sure you want to cancel this booking?').should('be.visible');

    cy.get('span').contains('Confirm').click();

    cy.contains('Cancelled').should('be.visible');

    cy.get('.close-button').click();
    cy.contains('Tour de Breweries').should('be.visible');
    cy.contains('Cancelled').should('be.visible');
  });

  it("should navigate to the bookings page and leave feedback for a booking", () => {
    cy.visit('/');
    cy.get('.menu-button').click();
    cy.get("span").contains('Bookings').click();

    cy.contains('Bookings').should('be.visible');

    cy.get('.MuiCard-root').last().contains('Details').click();
    cy.contains('Culinary Walking Tour Downtown').should('be.visible');

    cy.contains('Feedback').click();
    cy.contains('Rating').should('be.visible');

    cy.get('[for=simple-controlled-4]').click();
    cy.get('#name').type('This is a great tour!', { delay: 40 });

    cy.contains('Submit').click();

    cy.contains('Feedback submitted successfully!').should('be.visible');
    cy.get('.close-button').click();
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