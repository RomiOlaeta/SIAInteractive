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

     cy.location('hash', { timeout: 20000 })
       .should('include', '/media')

     mediaLibraryPage.createFolder('challenge')

     cy.location('hash').should('include', '/media')

     cy.wait(2000)

     cy.get('#mainFab', { includeShadowDom: true })
       .should('exist')
       .click({ force: true })

     cy.get('paper-fab[title="Subir Archivo"]', { includeShadowDom: true })
       .should('exist')

     // 👇 ACA va el intercept
     cy.intercept('POST', '**/Media/UploadFile**').as('uploadFile')

     cy.get('input[type="file"]', { includeShadowDom: true })
       .last()
       .selectFile('cypress/fixtures/test.jpg', { force: true })

     // 👇 esperar que termine el upload
     cy.wait('@uploadFile')
       .its('response.statusCode')
       .should('eq', 200)

     // 👇 refrescar para ver el archivo
     cy.reload()

     cy.contains('test.jpg', {
       includeShadowDom: true,
       timeout: 20000
     }).should('be.visible')
   })

    it('TC07 - Clickear en la opcion todos', () => {
        mediaLibraryPage.goToMediaLibrary()
        mediaLibraryPage.clickCheckBox()

    })

    it('TC08 - Clickear en la opcion ninguno', () => {
        mediaLibraryPage.goToMediaLibrary()
        mediaLibraryPage.clickNoneOption()

    })
})