# Coding Game Documentation

## Introduction

The Online Code Editor Coding Game is a web application that allows users to test their programming skills with algorithmic questions. Users can write, edit, and run their code directly in the browser.

## Technology Stack

The project utilizes React for the frontend, taking advantage of its flexibility and performance in building interactive UIs. The backend is powered by NestJS, chosen for its scalability and its modular architecture that allows for maintainable and testable applications.

## System Requirements

- Node.js v14.17.6
- Yarn or npm
- A modern web browser (Chrome, Firefox, Safari)

## Setup and Installation

1. Clone the repository using `git clone https://github.com/davecade/coding-game.git`
2. Navigate to the project root directory using `cd codeing-game`
3. Install dependencies using `npm run install:both`
4. Start the server using `npm run start:dev`. Nest server should start in `localhost:3001`
5. Open a separate terminal to start the client side using cd `cd client` and `npm start`
6. Navigate to `localhost:3000` in your web browser to use the application

## Architecture

The frontend of the application is built using React. Each programming question is a separate component. The code editor component uses the react-simple-code-editor library to provide syntax highlighting and other features. It is integrated with JDoodle's websocket and RESTful api's for code execution.

The backend is built using NestJS. It handles code execution requests, and provides various RESTful endpoints for retrieving and submitting questions.

## API Endpoints

### GET /questions

This endpoint retrieves a set of five programming questions that users can attempt to solve. It's intended to provide users with challenges to test their coding skills.

### GET /token

This endpoint interacts with the JDoodle API to request a token. This token is essential for authorizing subsequent requests, enabling users to utilize the JDoodle API's capabilities.

### POST /submit

This endpoint is used for submitting users' code for execution. It communicates with an underlying service to execute the code, validate it, and then return the results. This provides users with feedback on the correctness of their submitted code.

## Technical Challenges
1. **Code Compilation:** Finding an efficient and safe way to compile the user's code input along with test cases posed a challenge.


## Planned Improvements
1. **Language Expansion**: I am planning to support more programming languages. This expansion will cater to a diverse range of coding needs, broadening our user base.

2. **Improved Code Output**: I am working on refining the code output feature to provide more comprehensive troubleshooting support. This will aid users in effectively debugging their code, promoting a smoother coding experience.

3. **User Authentication**: Implementing user authentication, coupled with a MongoDB database to enhance data management efficiency.

4. **JWT Tokens**: Will integrating JWT tokens to elevate the security standards of the API requests.

5. **Testing**: Planning toa dd test coverage, and introduce automated testing. This will include unit tests for each component to ensure the system works correctly as a whole. 

## Contact Information
For further inquiries, please reach out to me at `dave.cadelina@outlook.com`.
```
