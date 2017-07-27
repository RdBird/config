# RdBird eslint-config

[![Version][version-svg]][package-url] [![Build Status][circleci-svg]][circleci-url] [![License][license-image]][license-url]

This package provides RdBird's [ESLint](http://eslint.org) configuration as an extensible shared config.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [How to use it in your project](#how-to-use-it-in-your-project)
  - [1. Install dependency](#1-install-dependency)
  - [2. Update `.eslintrc.json`](#2-update-eslintrcjson)
  - [3. Update `package.json`](#3-update-packagejson)
- [Architecture](#architecture)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to use it in your project

### Setup requirements
```sh
npm install \
eslint babel-eslint prettier \
@rdbird/eslint-config \
--save-dev
```

### Configure eslint

#### Use all plugins
***.eslintrc.json***
```json
{
  "extends": [
    "@rdbird/eslint-config"
  ]
}
```

*OR*

#### Cherry-pick plugins
***.eslintrc.json***
```json
{
  "extends": [
    "@rdbird/eslint-config/base",
    "@rdbird/eslint-config/react",
    "@rdbird/eslint-config/jsx-a11y",
    "@rdbird/eslint-config/flowtype"
  ]
}
```

### Setup the lint task

***package.json***
```json
{
  "scripts": {
    "lint": "eslint .",    
    "format": "eslint . --fix"    
  }
}
```

## Architecture

For a better community alignment, the configuration extends [StandardJS](https://standardjs.com/). Inspiration also comes from:
* [AirBnB](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
* [Algolia](https://github.com/algolia/eslint-config-algolia)
* [Supermind](https://github.com/supermind/eslint-config-supermind)

[version-svg]: https://img.shields.io/npm/v/@rdbird/eslint-config.svg?style=flat-square
[package-url]: https://www.npmjs.com/package/@rdbird/eslint-config
[circleci-svg]: https://circleci.com/gh/RdBird/eslint-config.svg?style=shield
[circleci-url]: https://circleci.com/gh/RdBird/eslint-config
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
