# stylelint-config-yoctol

[![npm version][npm-image]][npm-url]
[![Build Status](https://circleci.com/gh/Yoctol/stylelint-config-yoctol.svg?style=shield)](https://circleci.com/gh/Yoctol/stylelint-config-yoctol)
[![Greenkeeper badge](https://badges.greenkeeper.io/Yoctol/stylelint-config-yoctol.svg)](https://greenkeeper.io/)

## Rules overwritten

- extends: [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- plugins: [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- `order/properties-order`: Follow [css-property-sort-order-smacss](https://github.com/cahamilton/css-property-sort-order-smacss/blob/master/index.js)
- `value-keyword-case`: ignore `dummyValue` for `styled-component` usage

[npm-image]: https://badge.fury.io/js/stylelint-config-yoctol.svg
[npm-url]: https://www.npmjs.com/package/stylelint-config-yoctol
[circle-image]: https://circleci.com/gh/Yoctol/stylelint-config-yoctol.svg?style=svg
[circle-url]: https://circleci.com/gh/Yoctol/stylelint-config-yoctol
