# Tutorat

## Table of Contents

- [Description](#description)
- [Functionalities](#functionalities)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Script](#project-script)
- [Project Status](#project-status)
- [Credits](#credits)

## Description

The Tutoring project connects tutors with clients, whether they are parents and their children or students. Clients can participate in tutoring sessions to improve their skills in various areas.

## Functionalities

- User registration and authentication
- User profile management
- Searching and filtering tutors based on various criteria
- Booking and scheduling tutoring sessions
- Rating and reviewing tutors
- Uploading and managing documents (e.g., certifications, resumes)
- Real-time messaging between tutors and clients

## Technologies Used

- Angular
- Jest
- Compodoc
- Socket.io

## Installation

1. Clone the GitHub repository.
2. Make sure you have Angular and compodoc and Jest installed on your machine but your can install it whith script command.
3. Run `npm install` to install the project's dependencies.

## Usage

1. Start the server by running the command `npm start`.
2. Access the application by opening your browser and navigating to the URL `http://localhost:4200`.

## Project Script

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Run the JSON server

```{shell}
npm run jserver
```

This script runs the JSON server using the db.json file as the data source.

### Run tests in watch mode

```{shell}
npm run test:watch
```

This script runs Jest in watch mode, which automatically runs the tests whenever a file is modified.

### Run tests and generate code coverage report

```{shell}
npm run test:cov
```

This script runs Jest and generates a code coverage report.

### Generate project documentation

```{shell}
npm run compodoc
```

This script generates the project documentation using Compodoc and the tsconfig.doc.json configuration file.

### Generate project documentation and start a local server to access it

```{shell}
npm run compodoc:serve
```

This script generates the project documentation and starts a local server. You can access the documentation by opening your browser and navigating to the URL "<http://localhost:8080>".

### Generate project documentation, start a local server, and watch for changes to automatically update it

```{shell}
npm run compodoc:watch
```

This script generates the project documentation, starts a local server, and watches for changes to automatically update it.

### Perform a production build

```{shell}
npm run build:ci
```

This script performs a production build using Angular and the "production" configuration.

### Install Husky

```{shell}
npm run prepare
```

This script installs Husky, a Git hooks management tool that allows you to run scripts before or after certain Git actions.

### Check and fix style errors in files

```{shell}
npm run lint
```

This script runs eslint to check and fix style errors in JavaScript, TypeScript and HTML files in the src directory.

### Automatically format files

```{shell}
npm run format
```

This script runs prettier to automatically format JavaScript, TypeScript, HTML and SCSS files in the src directory.

## Project Status

The Tutorat project is currently under development. Some features may not be fully implemented but you can see the frontend project schema in the [tutorat.drawio](./tutorat.drawio) file.

## Credits

This project is based on the work of [Zabibu](https://zabibu.co).
