module.exports = {
  extends: 'stylelint-config-standard',
  plugins: 'stylelint-order',
  rules: {
    'order/declaration-block-properties-specified-order': [
      // based on https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/
      [
        /* Positioning */
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',

        /* Display & Box Model */
        'display',
        'overflow',
        'box-sizing',
        'width',
        'max-width',
        'min-width',
        'height',
        'max-height',
        'min-height',
        'padding',
        'border',
        'margin',

        /* Flex Container(Parent) */
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',

        /* Flex Item(Children) */
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'order',
        'align-self',

        /* Color */
        'background',
        'background-image',
        'color',
        'box-shadow',

        /* Text */
        'font-family',
        'font-size',
        'line-height',
        'text-align',

        /* Other */
        'content',
        'cursor',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
