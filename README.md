# group-array-by

Turns an array into an object with values grouped into arrays under the object key returned by the `getKey` function.

## install

```sh
$ npm install group-array-by
```

## example

```js
const groupBy = require('group-array-by')

groupBy(v => v.type, [
  { type: 'coffee', roast: 'light' },
  { type: 'coffee', roast: 'medium' },
  { type: 'juice', fruit: 'grape' },
  { type: 'coffee', roast: 'dark' }
])
// => {
  coffee: [
    { type: 'coffee', roast: 'light' },
    { type: 'coffee', roast: 'medium' },
    { type: 'coffee', roast: 'dark' }
  ],
  juice: [
    { type: 'juice', fruit: 'grape' }
  ]
}
```

## api

### groupBy(getKey, array)

- `getKey(value)`
  - `value` an item from the array
  - `=> key` the key the item should be grouped under
- `array: []` the array to group into an object
- `=> object` the object of grouped values
