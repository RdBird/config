[![Version][version-svg]][package-url] [![Build Status][circleci-svg]][circleci-url] [![License][license-image]][license-url]

# RdBird ESLint Configuration

## Project installation

### 1. Install dependency
```sh
npm install @rdbird/eslint-config --save-dev
```

### 2. Update `.eslint.json` 
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

Cherry pick plugins :
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
    "format": "eslint . --fix",    
  }
}
```

Then you can launch lint in a terminal
```sh
npm run lint
```

[version-svg]: https://img.shields.io/npm/v/@rdbird/eslint-config.svg?style=flat-square
[package-url]: https://www.npmjs.com/package/@rdbird/eslint-config
[circleci-svg]: https://circleci.com/gh/RdBird/eslint-config.svg?style=shield
[circleci-url]: https://circleci.com/gh/RdBird/eslint-config
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
