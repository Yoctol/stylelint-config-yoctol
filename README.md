# stylelint-config-yoctol

[![npm version][npm-image]][npm-url]
[![Build Status][circle-image]][circle-url]

##Rules overwritten

- 'declaration-block-properties-order'
```js
[
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
```


[npm-image]: https://badge.fury.io/js/stylelint-config-yoctol.svg
[npm-url]: https://www.npmjs.com/package/stylelint-config-yoctol
[circle-image]: https://circleci.com/gh/Yoctol/stylelint-config-yoctol.svg?style=svg
[circle-url]: https://circleci.com/gh/Yoctol/stylelint-config-yoctol
