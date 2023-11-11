describe('Form tests', () => {
	beforeEach(() => {
		cy.visit('/forms');
	});

  it('Test subscribe form', () => {
    cy.getDataTest('forms-header').should('contain.text', 'Testing Forms');
  })
});
