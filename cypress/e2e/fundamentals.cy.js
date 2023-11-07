const BASE_URL = "http://localhost:3000"

describe('template spec', () => {
  it('passes', () => {
    cy.visit(`${BASE_URL}/fundamentals`);

	// 1st approach
	// cy.get('h1').should('have.text', 'Testing Fundamentals');

	// 2nd approach
	cy.get('[data-text="fundamentals-header"]').contains(/Testing Fundamentals/i);
	// cy.get('[data-text="fundamentals-header"]').contains("Testing Fundamentals");
  })
})
