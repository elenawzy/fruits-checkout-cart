Web-app portion of A1
Deployment on Heroku: https://salty-journey-73958.herokuapp.com/
Contains a frontend folder containing App.js (React), and the server named app.js (Node.js).

CI made with github actions (.github/workflows folder) --> CI process can be seen in "Actions" tab --> npm test included in CI
CD implemented with Heroku (Heroku automatically deploys the application when there is a push) --> CD process can be seen in "environments" tab and then the deployments (If you click a certain deployment you can view the Heroku build scripts)

For testing, run "npm test" in the terminal in the root directory --> this uses Mocha and Chai unit-testing and will automatically search for the test folder in the root directory.
The unit test files can be found in the folder "test" in the root directory (test/appTest.js), if adding unit tests are needed.

The development environment:
The backend can be run with "node app.js" on localhost:5000. (execute this in root directory in your terminal)
The frontend can be run with "npm start" in the frontend folder, ("cd frontend" in the root directory in your terminal and then execute the command). This will be on localhost:3000.

The production environment:
The app is deployed on Heroku, and you must click the "Start a new session!" button when the app is opened. This is because a database hasn't been implemented so calculations are stored on the server. After that, fruits can be added to the cart, and tax and discounts can be applied. Clicking "Calculate Total" at the bottom of the app will calculate the total amount. If you add or remove items after you can still click "Calculate Total" to see your new total. "Start a new session!" should only be clicked when you first enter the application.

To test a production environment locally, you can execute "npm run build" in the front end folder and then execute "NODE_ENV=production node app.js" in the root directory. This will host the app on localhost:5000.
