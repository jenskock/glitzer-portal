import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'iPad Landscape',
      use: { 
        browserName: 'chromium',
        viewport: { width: 1180, height: 820 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: 'iPad Pro Landscape',
      use: { 
        browserName: 'chromium',
        viewport: { width: 1366, height: 1024 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: 'iPad Portrait Check',
      use: { 
        browserName: 'chromium',
        viewport: { width: 820, height: 1180 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    command: 'python3 -m http.server 8080',
    url: 'http://localhost:8080',
    reuseExistingServer: true,
  },
});
