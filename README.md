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
