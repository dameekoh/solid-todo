import { Item } from './Item';
import { style } from '@macaron-css/core';

const sectionStyle = style({
  width: '400px',
  minWidth: '400px',
  backgroundColor: '#383c44',
  padding: '16px',
  border: 'solid 0px',
  borderRadius: '8px',
});

const sectionContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
});

const removeButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: '6px',
  backgroundColor: '#383c44',
  border: 'none',
  color: '#ef4444',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#ef4444',
    color: 'white',
  },
  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.3)',
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export function Section() {
  const handleRemove = () => {
    alert('Item removed'); // todo!() : implement
  };
  return (
    <section class={sectionStyle}>
      <span class={sectionContentStyle}>
        <h2>Section Content</h2>
        <button
          onClick={handleRemove}
          class={removeButtonStyle}
          aria-label='Remove item'
        >
          ×
        </button>
      </span>
      <Item />
    </section>
  );
}
