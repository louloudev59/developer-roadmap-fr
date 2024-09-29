/**
 * Lire les variables d'environnement à partir d'un fichier.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * Voir https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* Temps maximum d'exécution pour un test. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Temps maximum que expect() doit attendre pour que la condition soit remplie.
     * Par exemple dans `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Exécuter les tests dans les fichiers en parallèle */
  fullyParallel: true,
  /* Échouer la build sur CI si test.only est accidentellement laissé dans le code source. */
  forbidOnly: !!process.env.CI,
  /* Réessayer uniquement sur CI */
  retries: process.env.CI ? 2 : 0,
  /* Désactiver les tests parallèles sur CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter à utiliser. Voir https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Paramètres partagés pour tous les projets ci-dessous. Voir https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Temps maximum pour chaque action comme `click()`. Par défaut 0 (pas de limite). */
    actionTimeout: 0,
    /* URL de base à utiliser dans des actions comme `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collecter les traces lors de la réessaye d'un test échoué. Voir https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configurer des projets pour les principaux navigateurs */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Tester avec des viewports mobiles. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Tester avec des navigateurs spécifiques de marque. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Dossier pour les artefacts de test tels que les captures d'écran, vidéos, traces, etc. */
  // outputDir: 'test-results/',

  /* Lancer votre serveur de développement local avant de démarrer les tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
