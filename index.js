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
        'overflow-x',
        'overflow-y',
        'box-sizing',

        'width',
        'max-width',
        'min-width',

        'height',
        'max-height',
        'min-height',

        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',

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

        'border-width',
        'border-top-width',
        'border-right-width',
        'border-bottom-width',
        'border-left-width',

        'border-style',
        'border-top-style',
        'border-right-style',
        'border-bottom-style',
        'border-left-style',

        'border-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color',

        'border-collapse',
        'border-spacing',

        'border-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-top-left-radius',

        'border-image',
        'border-image-outset',
        'border-image-repeat',
        'border-image-slice',
        'border-image-source',
        'border-image-width',

        'box-shadow',

        'outline',
        'outline-color',
        'outline-offset',
        'outline-style',
        'outline-width',

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

        /* Background */
        'background',
        'background-attachment',
        'background-clip',
        'background-color',
        'background-image',
        'background-origin',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-repeat',
        'background-size',

        /* Text */
        'color',
        'font-family',
        'font-size',
        'letter-spacing',
        'line-height',
        'overflow-wrap',
        'text-align',
        'text-decoration',
        'text-decoration-color',
        'text-decoration-line',
        'text-indent',
        'text-overflow',
        'text-shadow',
        'text-transform',
        'vertical-align',
        'white-space',
        'word-break',
        'word-wrap',

        /* Effect */
        'opacity',
        'visibility',
        'transform',
        'transition',
        'transition-delay',
        'transition-duration',
        'transition-property',
        'transition-timing-function',

        /* Misc, in alphabetical order */
        'appearance',
        'cursor',
        'content',
        'user-select',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
  },
};
