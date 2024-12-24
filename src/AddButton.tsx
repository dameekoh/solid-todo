import { Button } from '@kobalte/core/button';
import { style } from '@macaron-css/core';

const addButtonStyle = style({
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  width: 'auto',
  outline: 'none',
  borderRadius: '6px',
  padding: '0 16px',
  backgroundColor: 'hsl(200 98% 39%)',
  color: 'white',
  fontSize: '16px',
  lineHeight: '0',
  transition: '250ms background-color',

  ':hover': {
    backgroundColor: 'hsl(201 96% 32%)',
  },

  ':focus-visible': {
    outline: '2px solid hsl(200 98% 39%)',
    outlineOffset: '2px',
  },

  ':active': {
    backgroundColor: 'hsl(201 90% 27%)',
  },
});

export function AddButton() {
  return <Button class={addButtonStyle}>+</Button>;
}
