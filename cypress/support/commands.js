Cypress.Commands.add('assertValueCopiedToClipboard', value => {
    //Asserting that the expected value is the value in the clipboard
    cy.window().then(win => {
        win.navigator.clipboard.readText().then(text => {
            expect(text).to.eq(value)
        });
    });
});

Cypress.Commands.add('isInViewport', element => {
    //Asserting that the element is in view of the viewport
    cy.get(element).then($el => {
        const bottom = Cypress.$(cy.state('window')).height()
        const rect = $el[0].getBoundingClientRect()

        expect(rect.top).not.to.be.greaterThan(bottom)
        expect(rect.bottom).not.to.be.greaterThan(bottom)
        expect(rect.top).not.to.be.greaterThan(bottom)
        expect(rect.bottom).not.to.be.greaterThan(bottom)
    });
});

Cypress.Commands.add('assertURL', url => {
    //Used this assertion a few times, so I added it as a command
    cy.url().should('include', url)
});

Cypress.Commands.add('findAndClickByText', (element, text) => {
    //Searched and clicked for elements by looking at the text
    cy.get(element).contains(text)
        .click();
});