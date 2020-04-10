# test-angular-l10n-nx

This project was generated with [nx](https://nx.dev/angular).

This project is to test the lazy loading of modules and their translations.

When reloading (via browser refresh) a lazily loaded page, there is an error, as the language is empty.

When traveling to the lazy loaded page from within the application, it works as expected. The error shows up if you are on the page, then do a browser refresh.

```
core.js:6189 ERROR Error: Uncaught (in promise): angular-l10n (formatLanguage): Invalid language
    at resolvePromise (zone-evergreen.js:798)
    at resolvePromise (zone-evergreen.js:750)
    at zone-evergreen.js:860
    at ZoneDelegate.invokeTask (zone-evergreen.js:399)
    at Object.onInvokeTask (core.js:41442)
    at ZoneDelegate.invokeTask (zone-evergreen.js:398)
    at Zone.runTask (zone-evergreen.js:167)
    at drainMicroTaskQueue (zone-evergreen.js:569)
```
