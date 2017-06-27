module.exports = {
  extends: 'stylelint-config-standard',
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [
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
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'border-top',
        'border-right',
        'border-bottom',
        'border-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',

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
