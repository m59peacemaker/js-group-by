var reduceBy = require('reduce-by')

var groupBy = function (getKey, array) {
  return reduceBy(
    function (acc, v) {
      acc.push(v)
      return acc
    },
    function () { return [] },
    getKey,
    array
  )
}

module.exports = groupBy
