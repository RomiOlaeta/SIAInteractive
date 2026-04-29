import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo4.dexmanager.com',
    specPattern: 'cypress/e2e/tests/**/*.cy.ts',
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: false,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 20000,
  },
})