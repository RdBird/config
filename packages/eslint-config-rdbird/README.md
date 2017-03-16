# RdBird ESLint Configuration

## Project installation

### 1. Install dependency
```sh
npm install eslint-config-rdbird --save-dev
```

### 2. Update `.eslint.json` 
```json
{
  "root": true,
  "extends": [
    "rdbird",
    "rdbird/react",
    "rdbird/jsx-a11y",
    "rdbird/flowtype"
  ]
}
```
