// Imports
import { getAppVersion, getBuildTime, getEnv } from '@js/functions'

test('the app version is major.minor.patch', () => {
  const appVersionRE = /^\d+\.\d+\.\d+$/
  const appVersion = getAppVersion()
  expect(appVersion).toEqual(expect.stringMatching(appVersionRE))
})

test('the build time is YYYY-MM-DD', () => {
  const buildTimeRE = /^\d{4}-\d{2}-\d{2}$/
  const buildTime = getBuildTime()
  expect(buildTime).toEqual(expect.stringMatching(buildTimeRE))
})

test('the app environment is a non-empty string', () => {
  const appEnv = getEnv()
  expect(appEnv).toBeTruthy()
})
