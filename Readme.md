
# metalsmith-prompt

  A metalsmith plugin to prompt the user for series of answers and add them to the global metadata.

## Installation

    $ npm install metalsmith-prompt

## Example

```js
var prompt = require('metalsmith-prompt');

metalsmith.use(prompt({
  name: 'string',
  lucky: 'number',
  designer: 'boolean'
}));
```

  Which will prompt the user like so:

            name: Ian
           lucky: 42
        designer? (y/n) y

## License

  MIT