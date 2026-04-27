import { LoginLocators } from '../locators/LoginLocators'

export class LoginPage {
    visitLoginPage() {
        cy.visit('/DexFrontEnd/#!/login')
        cy.get('body', { timeout: 15000 }).should('be.visible')
    }

    typeUsername(username: string) {
        cy.get('paper-input#username', { includeShadowDom: true, timeout: 15000 })
            .shadow()
            .find('input')
            .type(username)
    }

    typePassword(password: string) {
        cy.get('paper-input#password', { includeShadowDom: true, timeout: 15000 })
            .shadow()
            .find('input')
            .type(password)
    }

    clickLoginButton() {
        cy.contains('paper-button', 'Login', { includeShadowDom: true, timeout: 15000 })
            .click()
    }

    login(username: string, password: string) {
        this.visitLoginPage()
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLoginButton()
    }
    validateRequiredLoginMessages() {
        cy.contains('paper-input-error', 'User required', { includeShadowDom: true })
            .should('be.visible')

        cy.contains(
            'paper-input-error',
            'Minimum 10 characters, at least 1 number, 1 uppercase letter and 2 special character(s)',
            { includeShadowDom: true }
        ).should('be.visible')
    }

    validateInvalidCredentialsMessage() {
        cy.contains('h2', 'Error').should('be.visible')

        cy.contains(
            'span',
            'User or password do not match.'
        ).should('be.visible')
    }
}