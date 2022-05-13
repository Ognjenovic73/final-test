/// <reference types="Cypress" />

class AddNewBoard {

    get addNewBoardBtn() {
        return cy.get('li[title="Add new Board"]').last();
    }

    get boardTitleInput() {
        return cy.get('input[type="text"]').last();
    }

    get nextButton() {
        return cy.get('button[type="button"]').last();
    }

    get typeSelectBtn() {
       return cy.get('span[name="type_kanban"]');
    }

    addNewBoard(title){
        this.addNewBoardBtn.click()
        this.boardTitleInput.type(title)
        this.nextButton.click()
        this.typeSelectBtn.click()
        this.nextButton.click()
        this.nextButton.click()
        this.nextButton.click()
        this.nextButton.click()
    }
}
    export const addNewBoard = new AddNewBoard();