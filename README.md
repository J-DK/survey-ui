# Survey Shrike
**SurveyShrike** help businesses conduct surveys. **SurveyShrike** believes every customer has different views or comments about services and over all products. And every business needs to know right customer mindset to engage customers for long run. 

# SurveyUI

This repository contains the UI code base which was
generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock server for API

Json-server is used to simulate the REST APIs

Run `npm run mock:server` to generate the REST APIs. Navigate to `http://localhost:3000/` to find
 all the available data in the form of APIs. 

Run `start:proxy:mock:server` to concurrently serve the application along with the **json-server**

## Real service which exposes the end points for all the operations

The service which exposes the REST APIs can be found at https://github.com/J-DK/survey-service

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deploy

It used TRAVIS CI tool for the automation of the builds

## Hosting

This project was hosted at github pages. Whenever there is a push to master, the code gets deployed
by the travis tool which would in turn host in github pages