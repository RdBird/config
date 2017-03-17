# RdBird ESLint Configuration

## Project installation

### 1. Install dependency
```sh
npm install eslint-config-rdbird --save-dev
```

### 2. Update `.eslint.json` 
Use all plugins :
```json
{
  "root": true,
  "extends": [
    "rdbird"
  ]
}
```

*OR*

Cherry pick plugins :
```json
{
  "root": true,
  "extends": [
    "rdbird/base",
    "rdbird/react",
    "rdbird/jsx-a11y",
    "rdbird/flowtype"
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
