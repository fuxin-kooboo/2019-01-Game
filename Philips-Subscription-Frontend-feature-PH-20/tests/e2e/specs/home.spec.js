// https://docs.cypress.io/api/introduction/api.html

describe('Home page', () => {
  it('Header should have a logo image', () => {
    cy.visit('/')
    cy.get('h1.Logo').find('img.Logo_img')
  })
})
