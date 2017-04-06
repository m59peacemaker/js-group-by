var test = require('tape')
var groupBy = require('./')

test('groupBy', function (t) {
  t.deepEqual(
    groupBy(v => v.type, [
      { type: 'coffee', roast: 'light' },
      { type: 'coffee', roast: 'medium' },
      { type: 'juice', fruit: 'grape' },
      { type: 'coffee', roast: 'dark' }
    ]),
    {
      coffee: [
        { type: 'coffee', roast: 'light' },
        { type: 'coffee', roast: 'medium' },
        { type: 'coffee', roast: 'dark' }
      ],
      juice: [
        { type: 'juice', fruit: 'grape' }
      ]
    }
  )

  t.deepEqual(
    groupBy(function (v) {
      return v.key || 'uncategorized'
    }, [
      { key: 'greetings', value: 'hi' },
      { key: 'number',    value: 1 },
      { key: 'letters',   value: [ 'a', 'b' ] },
      { key: 'greetings', value: [ 'hey', 'sup' ] },
      { key: 'greetings', value: 'yo' },
      {                   value: 'abc' },
      { key: 'letters',   value: 'c' },
      {                   value: 'def' },
      { key: 'foo',       value: 'bar' },
      { key: 'bar',       value: [ 123 ] }
    ]),
    {
      greetings: [
        { key: 'greetings', value: 'hi' },
        { key: 'greetings', value: [ 'hey', 'sup' ] },
        { key: 'greetings', value: 'yo' }
      ],
      number: [
        { key: 'number',    value: 1 }
      ],
      letters: [
        { key: 'letters',   value: [ 'a', 'b' ] },
        { key: 'letters',   value: 'c' }
      ],
      uncategorized: [
        {                   value: 'abc' },
        {                   value: 'def' }
      ],
      foo: [
        { key: 'foo',       value: 'bar' }
      ],
      bar: [
        { key: 'bar',       value: [ 123 ] }
      ]
    }
  )

  t.end()
})
