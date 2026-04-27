import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo4.dexmanager.com/',
    specPattern: 'cypress/e2e/tests/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
  },
})