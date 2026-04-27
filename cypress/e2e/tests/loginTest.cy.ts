import { LoginPage } from '../../pages/LoginPage'

describe('Dex Manager - Login', () => {
    const loginPage = new LoginPage()

    it('TC01 - Login exitoso', () => {
        loginPage.login('challengeqa', 'Abcd1234')

        cy.url().should('not.include', 'login')
    })

    it('TC02 - Login fallido con contraseña inválida', () => {
        loginPage.login('challengeqa', 'wrongpass')

        cy.contains('Error', { includeShadowDom: true, timeout: 10000 })
            .should('be.visible')

        cy.contains('User or password do not match.', { includeShadowDom: true, timeout: 10000 })
            .should('be.visible')
    })

    it('TC03 - Login fallido con usuario inválido', () => {
        loginPage.login('wronguser', 'Abcd1234')

        cy.url().should('include', 'login')

        cy.contains('Error', { includeShadowDom: true, timeout: 10000 })
            .should('be.visible')

        cy.contains('User or password do not match.', { includeShadowDom: true, timeout: 10000 })
            .should('be.visible')
    })

    it('TC04 - Validación de campos vacíos', () => {
        loginPage.visitLoginPage()

        loginPage.clickLoginButton()

        cy.contains('User required', {
            includeShadowDom: true,
            timeout: 10000
        }).should('be.visible')

        cy.contains(
            'Minimum 10 characters, at least 1 number, 1 uppercase letter and 2 special character(s)',
            {
                includeShadowDom: true,
                timeout: 10000
            }
        ).should('be.visible')

        cy.url().should('include', 'login')
    })
})