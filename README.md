<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

# MyApp README.md

## Description

MyApp is a web application that allows users to manage their to-do lists. It provides two main modules: UserModule and TodoModule. The UserModule handles user-related functionalities such as user creation, retrieval, and deletion. On the other hand, the TodoModule is responsible for managing tasks or to-do items associated with each user.

## Features

1. **UserModule**
   - Create User: Users can be created using this functionality.
   - Get All Users: Retrieve a list of all users that have been created.
   - Delete User: Remove a user from the system.

2. **TodoModule**
   - Add Todo: Users can add tasks to their to-do lists.
   - Delete Todo: Remove a specific task from a user's to-do list.
   - Get Completed Todos: Retrieve a list of to-do items that have been marked as completed for a specific user.
   - Get Pending Todos: Retrieve a list of to-do items that are yet to be completed for a specific user.
   - Update Todo Status: Users can update the status of a task from "not complete" to "complete."

## AppModule - Main Module

The AppModule serves as the main entry point of the application and handles the following tasks:

1. **Database Connection:** Establishes a connection to the application's database to store user information and to-do items.

2. **Module Imports:** Imports and integrates the UserModule and TodoModule functionalities into the main application.

## Getting Started

To run the MyApp application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/myapp.git`
2. Navigate to the project directory: `cd myapp`
3. Install the required dependencies: `npm install`
4. Set up the database connection by configuring the connection parameters.
5. Run the application: `npm start`

## Usage

1. User Creation:
   - To create a new user, call the appropriate API endpoint and provide the necessary user details such as name, email, etc.

2. Get All Users:
   - Use the designated API endpoint to fetch a list of all users that have been created in the system.

3. Delete User:
   - To delete a user, make a request to the specified API endpoint with the user ID to be deleted.

4. Add Todo:
   - Users can add new tasks to their to-do lists by using the provided API endpoint.

5. Delete Todo:
   - To remove a specific task from a user's to-do list, call the respective API endpoint with the todo ID to be deleted.

6. Get Completed Todos:
   - Retrieve a list of to-do items that have been marked as completed for a specific user.

7. Get Pending Todos:
   - Obtain a list of to-do items that are yet to be completed for a specific user.

8. Update Todo Status:
   - To mark a task as "complete," call the API endpoint and provide the todo ID with the updated status.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or any other database used for storage)

## Contribution Guidelines

Contributions to MyApp are welcome! If you wish to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make changes and commit them: `git commit -m "Add feature-name"`
4. Push the changes to your fork: `git push origin feature-name`
5. Create a pull request to the main repository.

Please ensure that your code follows the existing coding standards and includes appropriate tests for any new features.

## License

MyApp is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute this code as per the terms of the license.

## Contact

For any questions or inquiries, please contact us at contact@myapp.com.
