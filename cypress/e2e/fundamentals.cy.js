describe('Fundemental test', () => {
	it('Contains correct header text', () => {
		cy.visit('/fundamentals');

		// 1st approach
		// cy.get('h1').should('have.text', 'Testing Fundamentals');

		// 2nd approach
		// cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i);
		// cy.get('[data-test="fundamentals-header"]').contains("Testing Fundamentals");
		cy.get('[data-test="fundamentals-header"]').should(
			'contain.text',
			'Testing Fundamentals'
		);
	});

	it.only('Accordion testing', () => {
		cy.visit('/fundamentals');

		const testText =
			'The second is a callback function for your actually tests within that block';

		cy.contains(testText).should('not.be.visible');
		cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
		cy.contains(testText).should('be.visible');

		cy.get('[data-test="accordion-item-1"] div[role="button"]')
			.click()
			.then(() => {
				cy.contains(testText).should('not.be.visible');
			});
	});
});
