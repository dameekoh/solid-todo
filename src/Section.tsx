import { Item } from './Item';
import { style } from '@macaron-css/core';

const sectionStyle = style({
  width: '400px',
  minWidth: '400px',
  backgroundColor: '#383c44',
  padding: '16px',
});

export function Section() {
  return (
    <section class={sectionStyle}>
      Section Content
      <Item />
    </section>
  );
}
