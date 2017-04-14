[![Version][version-svg]][package-url] [![Build Status][circleci-svg]][circleci-url] [![License][license-image]][license-url]

# RdBird ESLint Configuration

This is the RdBird configuration for the code checker [ESLint](http://eslint.org).
The main purpose is to share codestyle, best practises for every rdbird projects.

## Project installation

### 1. Install dependency
```sh
npm install @rdbird/eslint-config eslint --save-dev
```

### 2. Update `.eslintrc.json` 
Use all plugins :
```json
{
  "root": true,
  "extends": [
    "@rdbird/eslint-config"
  ]
}
```

*OR*

Cherry-pick plugins :
```json
{
  "root": true,
  "extends": [
    "@rdbird/eslint-config/base",
    "@rdbird/eslint-config/react",
    "@rdbird/eslint-config/jsx-a11y",
    "@rdbird/eslint-config/flowtype"
  ]
}
```

### 3. Update `package.json` 

```json
{
  "scripts": {
    "lint": "eslint .",    
    "format": "eslint . --fix"    
  }
}
```

Then you can launch lint in a terminal
```sh
npm run lint
```

## Architecture

For a better community alignment the configuration extends StandardJS :


__ Standard JS [https://standardjs.com/]() __


Inspiration also comes from :
*   [AirBnB](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
*   [Supermind](https://github.com/supermind/eslint-config-supermind)

[version-svg]: https://img.shields.io/npm/v/@rdbird/eslint-config.svg?style=flat-square
[package-url]: https://www.npmjs.com/package/@rdbird/eslint-config
[circleci-svg]: https://circleci.com/gh/RdBird/eslint-config.svg?style=shield
[circleci-url]: https://circleci.com/gh/RdBird/eslint-config
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
