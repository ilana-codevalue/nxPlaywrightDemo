import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';

// For CI, you may want to set BASE_URL to the deployed application.
const _baseURL = 'http://localhost:4200';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: 'src' }),
  
  workers:  process.env.CI ? 1 : undefined,

  reporter: process.env.CI ? 'blob' : 'html',
  
  use: {
    baseURL: _baseURL,
    trace: 'on-first-retry',
  },

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run preview-app1',
    url: _baseURL,
    reuseExistingServer: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
