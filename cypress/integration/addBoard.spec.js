/// <reference types="Cypress" />

import { addNewBoard } from "../page_objects/addNewBoard";
import { deleteBoard } from "../page_objects/deleteBoard";
import {faker} from '@faker-js/faker';

describe ('add and delete board', () => {

    let boardId;

    let addNewBoardData = {
        title: faker.word.noun()
      }
      

      before('login', () => {
        cy.loginViaBackend();
        cy.visit('/my-organizations');
        cy.url().should('include', '/my-organizations')
    })

    it('addNewBoard', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
          }).as('newBoardAdded');


        addNewBoard.addNewBoard (
            addNewBoardData.title
        )
        cy.wait('@newBoardAdded').then(interception => {

            console.log(interception);
            boardId = interception.response.body.id;
            console.log(boardId);
            expect(interception.response.statusCode).to.eql(201);
           
     })
        cy.url().should('include', '/boards');
    })
    it('deleteBoard', () => {

        cy.intercept({
            method: 'DELETE',
            url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`
          }).as('boardDeleted');


        deleteBoard.deleteBoard ()

        cy.wait('@boardDeleted').then(interception => {
            cy.log(JSON.stringify(interception.response.statusCode));
            expect(interception.response.statusCode).to.eql(200);
            console.log('RESPONSE', interception);
     })
        cy.url().should('include', '/organizations');
    })

})