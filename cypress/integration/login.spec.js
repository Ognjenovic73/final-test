/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

describe('loginPOM', () => {

    before('visit login page', () => {
        cy.visit('/login');
        cy.url().should('contains','/login');
    })

    it('login with valid data', () => {
        
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
          }).as('successfulLogin');

        loginPage.loginHeading.should('have.text','Log in with your existing account')
        loginPage.login('draganthejedi@gmail.com','Sith_Lord99')
        
        cy.wait('@successfulLogin').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(200);
            console.log('RESPONSE', interception);
     })
        cy.url().should('contains','/my-organizations');
     
  })
})