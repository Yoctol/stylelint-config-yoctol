import stylelint from 'stylelint';

import config from '..';

const validCss = `@import url(x.css);
@import url(y.css);

/**
 * Multi-line comment
 */
.selector-1,
.selector-2,
.selector-3[type="text"] {
  display: block;
  box-sizing: border-box;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  order: 2;
  margin: 0 auto;
  padding: 2em;
  overflow-x: hidden;
  border: 1px solid #fefefe;
  border-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 2px;
  outline: 1px solid rgb(139, 139, 139);
  opacity: 0.5;
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  color: #333;
  font-size: 16px;
  text-decoration: underline;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
}

.selector-a,
.selector-b:not(:first-child) {
  top: calc(calc(1em * 2) / 3);
  padding: 10px !important;
}
.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */
@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media screen and (min-resolution: 192dpi), screen and (min-resolution: 2dppx) {
  .selector {
    height: 10rem;
    margin: 10px;
    margin-bottom: 5px;
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: '→';
    background-image: url(x.svg);
  }
}
`;

const invalidCss = `
a {
  right: 0.1em;
  top: .2em;
}
`;

it('shows no warnings with valid css', async () => {
  const data = await stylelint.lint({
    code: validCss,
    config,
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  expect(errored).toBeFalsy();
  expect(warnings.length).toBe(0);
});

it('shows a warning with invalid css', async () => {
  const data = await stylelint.lint({
    code: invalidCss,
    config,
  });

  const { errored, results } = data;
  const { warnings } = results[0];

  expect(errored).toBeTruthy();
  expect(warnings.length).toBe(1);
  expect(warnings[0].text).toMatchInlineSnapshot(`
"
	  Expected \\"top\\" to come before \\"right\\" (order/properties-order)"
`);
});
