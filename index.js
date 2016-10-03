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
            'max-width',
            'min-width',
            'height',
            'max-height',
            'min-height',
            'padding',
            'border',
            'margin',
          ],
        },
        {
          /* Flex Container(Parent) */
          properties: [
            'flex-flow',
            'flex-direction',
            'flex-wrap',
            'justify-content',
            'align-items',
            'align-content',
          ],
        },
        {
          /* Flex Item(Children) */
          properties: [
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'order',
            'align-self',
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
