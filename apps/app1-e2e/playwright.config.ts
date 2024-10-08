import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';

// For CI, you may want to set BASE_URL to the deployed application.
const _baseURL = 'http://localhost:4200';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: 'src' }),
  
   /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  workers:  process.env.CI ? 2 : undefined,

  reporter: process.env.CI ? [['blob', { outputFolder: 'blob-report' }]]: 'html',

  use: {
    baseURL: _baseURL,
    trace: 'on-first-retry',
  },

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run start',
    url: _baseURL,
    reuseExistingServer: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
