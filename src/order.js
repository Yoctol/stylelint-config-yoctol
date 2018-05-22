const smacssOrder = require('css-property-sort-order-smacss');

const order = {};

Object.keys(smacssOrder).forEach(category => {
  let properties = [];

  for (let i = 0; i < smacssOrder[category].length; i++) {
    properties = properties.concat(smacssOrder[category][i]);
  }

  order[category] = properties;
});

module.exports = order;
