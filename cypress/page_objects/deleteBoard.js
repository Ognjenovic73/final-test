/// <reference types="Cypress" />

class DeleteBoard {

    get selectBoardBtn() {
        return cy.get('div[class="vs-c-img--avatar vs-c-img--board-avatar"]').last();
    }

    get configureBoard() {
        return cy.get('a[class="vs-c-site-logo"]').last();
    }

    get deleteBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--warning vs-c-btn--spaced"]');
    }

    get confirmBtn() {
        return cy.get('button[name="save-btn"]');
    }

    deleteBoard(){
        this.selectBoardBtn.click()
        this.configureBoard.click()
        this.deleteBtn.click()
        this.confirmBtn.click()
    }
}
export const deleteBoard = new DeleteBoard();