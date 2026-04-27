import { MediaLibraryLocators } from '../locators/MediaLibraryLocators'

export class MediaLibraryPage {

    goToMediaLibrary() {
        cy.contains('CONTENIDO', {
            includeShadowDom: true,
            timeout: 15000
        }).click()

        cy.contains('Librería de Medias', {
            includeShadowDom: true,
            timeout: 15000
        }).click()
    }

    selectFolderOption() {
        cy.get(MediaLibraryLocators.folderOption, {
            includeShadowDom: true,
            timeout: 15000
        }).click({ force: true })
    }

    typeFolderName(folderName: string) {
        cy.get(MediaLibraryLocators.folderNameInput, {
            includeShadowDom: true,
            timeout: 15000
        }).type(folderName)
    }

    clickConfirmFolderButton() {
        cy.get(MediaLibraryLocators.confirmFolderButton, {
            includeShadowDom: true,
            timeout: 15000
        })
            .filter(':visible')
            .eq(0)
            .click({ force: true })
    }

    createFolder(folderName: string) {
        this.clickActionButton()
        this.selectFolderOption()
        this.typeFolderName(folderName)
        this.clickAcceptButton()
    }
    clickUploadFileOption() {
        cy.contains(MediaLibraryLocators.uploadFileOption, 'Subir Archivo', {
            includeShadowDom: true,
            timeout: 10000
        }).click({ force: true })
    }

    uploadFile(filePath: string) {
        this.clickUploadFileOption()

        cy.get('input[type="file"]', {
            includeShadowDom: true,
            timeout: 10000
        })
            .first()
            .selectFile(filePath, { force: true })
        cy.contains('Upload', { includeShadowDom: true, timeout: 10000 })
            .click({ force: true })
    }

    clickActionButton() {
        cy.get(MediaLibraryLocators.actionButton, {
            includeShadowDom: true,
            timeout: 15000
        })
            .filter(':visible')
            .eq(0)
            .click({ force: true })
    }

    clickAcceptButton() {
        cy.contains(MediaLibraryLocators.acceptButton, 'Aceptar', {
            includeShadowDom: true,
            timeout: 15000
        })
            .should('be.visible')
            .click({ force: true })
    }
    clickAddButton() {
        cy.get('dex-fab-menu', { timeout: 15000 })
            .shadow()
            .find('iron-icon#icon')
            .click({ force: true })
    }
}