# stylelint-config-yoctol

[![npm version][npm-image]][npm-url]
[![Build Status][circle-image]][circle-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/Yoctol/stylelint-config-yoctol.svg)](https://greenkeeper.io/)

## Rules overwritten

- 'plugins: stylelint-order'
- 'order/declaration-block-properties-specified-order'
```js
[
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
```


[npm-image]: https://badge.fury.io/js/stylelint-config-yoctol.svg
[npm-url]: https://www.npmjs.com/package/stylelint-config-yoctol
[circle-image]: https://circleci.com/gh/Yoctol/stylelint-config-yoctol.svg?style=svg
[circle-url]: https://circleci.com/gh/Yoctol/stylelint-config-yoctol
