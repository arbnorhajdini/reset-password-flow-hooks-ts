# Getting Started with the reset password flow

This is a Single Page Application that lets users to vote through the Polls API.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Documentation for the Polls API is available [here](https://pollsapi.docs.apiary.io/).
The application is tested End-2-End using [Cypress Framework](https://www.cypress.io/)

## Technology Stack

1. Frontend: react, bootstrap, noty, i18next, universal-cookies, react-icons.
2. Backend: node, express, mongodb, nodemailer.
3. Unit test: enzyme, mocha.
4. E2e: Cypress

## USAGE

1. One the project is running you will see http://localhost:8000/en for english version and you can switch to http://localhost:8000/de for german translation.
2. Email for testing is arbnorhajdini1@gmail.com with an existing password of 1234
3. On the landing page please provide the given email address arbnorhajdini1@gmail.com, otherwise the BE will not find it on the list and reject the request.
4. The email template sent is mocked with Ethereal, so a new window will popup to show the email ( if it dose not display, please disable the popup blocker).
5. After you click on the button it will direct the user to the change password page and there you need to enter a new password.
6. The password musst be at least 4 characters long.

## Main Features

1. Provides to reset forgotten password
2. Send a mocked email with the reset password
3. Stores new password

## Online Deployed Demo

The Online Demo for the Voting App with complete functionality can be accessed at https://github.com/arbnorhajdini/keleya-reset-password-flow

## Local Installation Guide

In order to setup the project locally please follow the instructions below. In the root directory, you can run the following commands using a terminal:

### `npm install`

Installs the required dependencies in the local node_modules folder that are defined in package.json.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000/en](http://localhost:8000/en) or [http://localhost:8000/de](http://localhost:8000/de) to view it in the browser.

The page will reload automatically if you make edits.\
You may also see any linting errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## End-2-End Testing Guide

In the './cypress' directory, you can run the following commands using a terminal:

### `npm run cy:run`

Runs all the integration tests in the terminal.

### `npm run cy:open`

Runs all the integration tests in a separate browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
