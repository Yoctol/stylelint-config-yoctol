import order from './order';

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
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
