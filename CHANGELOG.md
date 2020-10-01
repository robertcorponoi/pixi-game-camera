## 1.0.0 / 2020-10-01
- [FEATURE] Exported all parts of the package individually so you can use just what you need.
- [FEATURE] Detached containier from app so that any container can be used for any effect.
- [MISC] Removed easing functions to offer greater flexability and smaller file sizes. A linear ease is used by default and any easing function can be passed in to effects that can be eased.
- [MISC] Change file names from PascalCase to snake_case.
- [MISC] Removed all default exports and made them all named.

## 0.2.2 / 2020-09-30
- [TEST] Changed test server to use fastify for ease of use.
- [MISC] Flatted directory structure in src directory.
- [MISC] Removed unnecessary typings.
- [MISC] Updated out-of-date dependencies to their latest versions and fixed all security vulnerabilities.
- [MISC] Added extra build scripts.

## 0.2.1 / 2020-04-16
- [MISC] Updated out-of-date dependencies to their latest versions which also fixed some fixed security vulnerabilities.

## 0.2.0 / 2020-03-18
- [FEATURE] Added rotate effect.
- [DOCS] Updated docs to show usage of rotate effect.
- [TEST] Added test for rotate effect.
- [MISC] Added logo to README.

## 0.1.1 / 2020-03-18
- [MISC] Fixed security vulnerabilities that could be fixed. The rest require updates to @babel/cli.
- [MISC] Updated out-of-date dependencies to their latest versions.

## 0.1.0 / 2020-02-28
- Initial release.

## 0.0.6 / 2020-02-27
- [FEATURE] Finished fadeTo effect.
- [TESTS] Added testing for effects.

## 0.0.5 / 2020-02-26
- [FEATURE] Finished panTo effect.
- [HOTFIX] Fixed issue with zooming that caused it to finish before the duration of the effect had been reached.

## 0.0.4 / 2020-02-25
- [FEATURE] Finished shake effect.
- [FEATURE] Started panTo effect.

## 0.0.3 / 2020-02-24
- [FEATURE] Added ability to pass in PIXI.Ticker.
- [FEATURE] Removed update methods as they caused multiple instances of an effect to be created each frame.
- [FEATURE] Added ability to use easing functions from `instance.EASING`.
- [FEATURE] Finished zoomTo functionality but started work on shake again.

## 0.0.2 / 2020-02-24
- [FEATURE] Finished shake functionality.
- [FEATURE] Added an effects class to keep track of shared properties between effects.

## 0.0.1 / 2020-02-22
- [FEATURE] Added camera class to manage effects more easily.

## 0.0.1 / 2020-02-21
- Initial commit
