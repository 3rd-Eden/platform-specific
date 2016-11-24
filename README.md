# platform-specific

React and React-Native platform detection without having to depend on React
Native or React directly. This module uses (or abuses) the platform specific
extensions and package.json properties to serve up the correct platform
specification.

- For browsers it assumes that bundlers use the `browser` field in the
  `package.json`.
- For React-Native on Android it assumes that `index.android.js` is loaded.
- For React-Native on iOS it assumes that `index.ios.js` is loaded.
- For React-Native on Windows it assumes that `index.win.js` is loaded.
- For everything else it assumes `index.js` is selected by default (such as
  node.js)

## Installation

The module is released in the public npm registry and can be installed by
running:

```
npm isntall --save platform-specific
```

## Usage

Simply require the module in your application/code/component:

```js
import platform from 'platform-specific';
```

The returned `platform` variable now contains an object the following keys:

- `type` set `js` unless it's used on react-native then it's set to `react-native`
- `platform` which can be `android`, `ios`, `browser` or `node`

## License

MIT
