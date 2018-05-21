const order = require('./order');

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
      [
        ...order.heading,
        ...order.box,
        ...order.border,
        ...order.background,
        ...order.text,
        ...order.animation,
        ...order.other,
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
