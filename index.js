module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'declaration-block-properties-order': [
      [
        // based on https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/
        {
          /* Positioning */
          properties: [
            'position',
            'z-index',
            'top',
            'right',
            'bottom',
            'left',
          ],
        },
        {
          /* Display & Box Model */
          properties: [
            'display',
            'overflow',
            'box-sizing',
            'width',
            'min-height',
            'height',
            'padding',
            'border',
            'margin',
          ],
        },
        {
          /* Color */
          properties: [
            'background',
            'background-image',
            'color',
            'box-shadow',
          ],
        },
        {
          /* Text */
          properties: [
            'font-family',
            'font-size',
            'line-height',
            'text-align',
          ],
        },
        {
          /* Other */
          properties: [
            'content',
            'cursor',
          ],
        },
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
