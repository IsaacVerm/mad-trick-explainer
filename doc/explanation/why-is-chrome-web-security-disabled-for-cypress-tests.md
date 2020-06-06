# Why is Chrome Web Security disabled for Cypress tests?

Some tests (e.g. `opens link if you select trick name` for the `trick-list` component), open links to other domains. In the case of that test, you're redirected to Wikipedia when selecting a trick. This doesn't stroke Cypress right because of its [same-origin policy](https://docs.cypress.io/guides/guides/web-security.html).

In most cases you can avoid really selecting a link by just making assertions on the `href` attribute of the element. However, in this case there doesn't seem to be a workaround since we also want to test if an alert is triggered.