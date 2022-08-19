babel-plugin-jsx-remove-attributes
===========

[![NPM version](https://badgen.net/npm/v/babel-plugin-jsx-remove-attributes)](https://www.npmjs.com/package/babel-plugin-jsx-remove-attributes)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/babel-plugin-jsx-remove-attributes)](https://www.npmjs.com/package/babel-plugin-jsx-remove-attributes)
[![License](https://badgen.net/npm/license/babel-plugin-jsx-remove-attributes)](https://www.npmjs.com/package/babel-plugin-jsx-remove-attributes)

A Babel plugin to remove JSX attributes.

## Install

```bash
yarn add -D babel-plugin-jsx-remove-attributes
```

## Usage

In `.babelrc` add the plugin and inform your list of attributes to be removed. (You can pass Strings or RegExp)

```ts
{
  plugins: [
    ...
    [
      "babel-plugin-jsx-remove-attributes", {
        attributes: ["attribute1", /attribute2/, ...]
      }
    ] 
    ...
  ]
}
```

## Example

**Input JSX Component**

```tsx
  const Component = () => (
    <h1 className="title" data-test-id="title" data-effect-active="true">Hello World!</h1>
  )
```

**Config plugin**

```ts
{
  plugins: [
    ...
    [
      "babel-plugin-jsx-remove-attributes", {
        attributes: ["data-test-id", /data-effect.*/]
      }
    ] 
    ...
  ]
}
```

**Output JSX Component**

```tsx
  const Component = () => (
    <h1 className="title">Hello World!</h1>
  )
```
