describe('Plotly take home test', () => {
  beforeEach(() => {
    //changing viewport to get more consistent results for asserting the urls.
    cy.viewport(1024, 768);
    cy.visit('https://www.cypress.io/');
  });

  it('Should be able to scroll down to “Loved by OSS,trusted by Enterprise', () => {
    //Finding the loved by heading then scrolling to it on the page and asserting it's in the viewport
    cy.get('.grow div.font-primary').contains('5.0M+').then(($div) => {
      cy.scrollTo(0, 7000);

      //assert that the Loved by heading is in the viewport
      cy.isInViewport($div);
    });
  });

  it('Should be able to navigate to About Cypress page', () => {
    cy.get('#dropdownCompany')
        .click();
    cy.findAndClickByText('span', 'About Cypress');

    //assert that the url is /about-us
    cy.assertURL('/about-us');
  });

  it('Should be able to click to copy npm install command', () => {
    cy.findAndClickByText('astro-island', 'npm install cypress');
    cy.get('[data-cy="modal-install-copy"]')
        .click();

    //assert that the value in the clipboard in npm install cypress --save-dev
    cy.assertValueCopiedToClipboard('npm install cypress --save-dev');
  });

  it('Should be able to navigate to visual review page', () => {
    cy.get('#dropdownProduct')
        .click();
    cy.findAndClickByText('span', 'Visual Reviews');

    //assert that the url is /visual_reviews
    cy.assertURL('/#visual_reviews');
  });

  it('Should be able to navigate to Smart Orchestration and verify Test Analytics has a green circle', () => {
    cy.get('#dropdownProduct')
        .click();
    cy.findAndClickByText('span', 'Smart Orchestration');
    cy.get('.hidden > [href="#test_analytics"]')
        .click();

    //assert that the Test Analytics hidden menu item has a green circle around it
    cy.get('.hidden > [href="#test_analytics"]').should('have.class', 'border-jade-200');
  });
});