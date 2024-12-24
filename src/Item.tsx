import { Checkbox } from '@kobalte/core';
import { style } from '@macaron-css/core';
import { removeTodo, updateTodoText, toggleTodoComplete } from './Store';

const itemContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  margin: '12px 0px',
  width: 'calc(100% - 18px)',
});

const checkboxWrapperStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
});

const checkboxControlStyle = style({
  height: '20px',
  width: '20px',
  borderRadius: '6px',
  backgroundColor: 'hsl(240 6% 90%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&[data-checked]': {
      borderColor: 'hsl(200 98% 39%)',
      backgroundColor: 'hsl(200 98% 39%)',
      color: 'white',
    },
  },
});

const inputStyle = style({
  flexGrow: 1,
  padding: '4px',
  border: '0px solid #e2e8f0',
  borderRadius: '6px',
  ':focus': {
    outline: 'none',
  },
  backgroundColor: '#383c44',
  color: 'white',
  '::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
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

interface ItemProps {
  id: string;
  text: string;
  completed: boolean;
}

export function Item(props: ItemProps) {
  return (
    <div class={itemContainerStyle}>
      <Checkbox.Root
        checked={props.completed}
        onChange={() => toggleTodoComplete(props.id)}
        class={checkboxWrapperStyle}
      >
        <Checkbox.Input class='checkbox__input sr-only' />
        <Checkbox.Control class={checkboxControlStyle}>
          <Checkbox.Indicator>
            <svg
              width='14'
              height='14'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 3L4.5 8.5L2 6'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </Checkbox.Indicator>
        </Checkbox.Control>
      </Checkbox.Root>

      <input
        type='text'
        value={props.text}
        onInput={(e) => updateTodoText(props.id, e.currentTarget.value)}
        placeholder='Enter text...'
        class={inputStyle}
      />

      <button
        onClick={() => removeTodo(props.id)}
        class={removeButtonStyle}
        aria-label='Remove item'
      >
        ×
      </button>
    </div>
  );
}
