# plotly-challenge

This take home was written using Javascript and Cypress.io. Since I was using Cypress, for the bonus test case I didn't explicitly scroll down as that isn't a requirement of Cypress.

One pain point I ran into was getting the tests to not be flaky. 
Specifically clicking on the main navigation items. Most of the time 
it would work, but every so often it would click and not open the submenu. 
When I pinned the click call in the Cypress test runner, I saw in the console 
that the click event was null. Almost like things were detached at the time of the click.

To fix this, I tried a few options, none of which worked.
I have tried various ways of clicking the element, using mouseover to show the submenu and even double clicking.
Since all of those failed to improve the flakyness, I added an explicit wait to slow things down
to see if I could find the failure. When I did that, the failures stopped. This then lead me to
believe it was a page loading issue either JS or an API call. 

I started off waiting for the last API call in the network tab to return 200 before starting the test
then I tried waiting for all of them to finish, again no luck. Next step, I tried waiting for the page to be loaded
then explicitly wait for JS to load. Both had no effect other than slowing down the tests.

As a final attempt, I checked if the submenu was open and if not, click on the top level menu item again.
That still didn't make it any less flaky so I left the explicit wait... bad practice and all.

Please let me know what the solution to this was!

**To install:**
npm install cypress --save-dev

**To run the tests:**
npx cypress open 
Click on E2E testing 
Select Chrome as the browser and click start testing 
Click on the `plotly-take-home` test