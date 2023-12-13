# Production Project
A small implementation of a social network in the form of a user profile and a news feed, in which users can make changes, leave comments, sort news according to their preferences.

## How to run project

```
npm install - install all dependencies
npm run start:dev - to run front-end with server
```

## All available useful scripts

- `build:prod` - build project for build mode
- `build:dev` - build project for dev mode
- `lint:ts` - testing .ts files with linter
- `lint:ts:fix` - fixing .ts files with linter
- `lint:scss` - testing .scss files with stylelint
- `lint:scss:fix` - fixing .scss files with stylelint
- `test:unit` - run unit and integration tests
- `test:ui` -  run screenshot tests
- `test:ui:ok` - set all screenshots changes as ok
- `test:ui:ci` - run screenshot tests in CI
- `storybook` - run storybook
- `cypress:run` - run e2e tests with Cypress

## Project architecture
Implemented the [Feature-Sliced Design](https://feature-sliced.design/) to ensure the application’s modularity, scalability and maintainability. This architectural approach streamlined development and enabled rapid feature deployment. 

## Translations
The project has the ability to use Russian and English languages. Implemented using the library i18n.

## Technology stack
1. **Front-end**
    - TypeScript
    - React.js
    - Redux Toolkit
    - RTK Query
    - Webpack
    - Vite
    - Babel
    - Jest
    - React Testing Library
    - Storybook
    - Cypress
2. **Back-end**
    - Node.js
    - Json-Server