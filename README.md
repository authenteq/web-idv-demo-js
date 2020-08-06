
# Web IDV Demo in JavaScript

## Introduction

This is a project that demonstrates the integration of Authenteq Web IDV with the application written in JavaScript. This project consists of a frontend in React and a backend in Express.js.

**Note:** We cannot use just the React frontend to integrate Authenteq Web IDV. **All processing that involves credentials (client id and client secret) must take place in the backed of the service.**

## Running project

To run the project install first the dependencies:
```bash
npm install
```

Create .env file with two variables:
```
CLIENT_ID=o7...My
CLIENT_SECRET=1D...M5
```

You can find these values in the [Customer Dashboard](https://customer-dashboard.app.authenteq.com/customer/api-keys).

To start the backend of the service run:
```
npm run start-server
```

The backend runs on port 8888 on the localhost.

Then run the frontend:
```
npm run start  
```

The frontend starts on port 3000 on the localhost.

Open [https://localhost:3000](https://localhost:3000).

The application contains two views:
* main view (/) - initiates the process,
* results view (/results) - displays images of the ID and the details extracted from the document. It will be automatically displayed once the verification process is complete.

## Project structure

The project structure:
* */views* - React views,
* */components* - the components used to build the views,
* *App.js* - root component of the app,
* *index.js* - starting script of the app.
* *server.js* - The backend service of the app written in express.js.
