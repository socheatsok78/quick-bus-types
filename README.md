# @socheatsok78/quick-bus-types

## Install

```sh
npm i --save-dev @socheatsok78/quick-bus-types
# or
yarn add -D @socheatsok78/quick-bus-types
```

## Usage

Add `./node_modules/@socheatsok78` to `tsconfig.json`, `compilerOptions.typeRoots` list.

```json
{
  "compilerOptions": {
    /* List of folders to include type definitions from. */
    "typeRoots": [
      "./node_modules/@socheatsok78"
    ]
}
```

or within your code

```js
/// <reference types="@socheatsok78/quick-bus-types" />

import Bus from '@condenast/quick-bus'
const bus = new Bus()
```
