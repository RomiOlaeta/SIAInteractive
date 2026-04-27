import { LoginPage } from '../../pages/LoginPage'
import { MediaLibraryPage } from '../../pages/MediaLibraryPage'

describe('Dex Manager - Media Library', () => {

    const loginPage = new LoginPage()
    const mediaLibraryPage = new MediaLibraryPage()

    beforeEach(() => {
        loginPage.login('challengeqa', 'Abcd1234')
        cy.url().should('not.include', 'login')
    })

    it('TC05 - Crear carpeta', () => {
        mediaLibraryPage.goToMediaLibrary()

        mediaLibraryPage.createFolder('challenge')

        cy.contains('challenge', {
            includeShadowDom: true,
            timeout: 10000
        })
    })


    it('TC06 - Cargar archivo mediante Upload File', () => {

        mediaLibraryPage.goToMediaLibrary()
        mediaLibraryPage.createFolder('challenge')

        mediaLibraryPage.clickActionButton()
        mediaLibraryPage.clickUploadFileOption()

        mediaLibraryPage.uploadFile('cypress/fixtures/test-file.txt')

        cy.wait(3000)

        cy.get('body', { includeShadowDom: true }).then($body => {
            cy.log($body.text())
        })

        cy.contains('test-file.txt', {
            includeShadowDom: true,
            timeout: 20000
        }).should('exist')

    })
})