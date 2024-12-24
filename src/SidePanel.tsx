import { style } from '@macaron-css/core';

const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '400px',
});

const halfScreenStyle = style({
  flex: 1, // Each section takes 50% of the height
  display: 'flex',
  justifyContent: 'center',
  padding: '16px 0px',
  overflowY: 'auto',
  width: '100%',
});

const todoStyle = style({
  height: '60px',
  backgroundColor: '#2d3139',
  borderBottom: '4px solid rgba(255, 255, 255, 0.1)',
});

const doneStyle = style({
  backgroundColor: '#2d3139',
});

export function SidePanel() {
  return (
    <div class={containerStyle}>
      <div class={`${halfScreenStyle} ${todoStyle}`}>
        <h2>Todo</h2>
      </div>
      <div class={`${halfScreenStyle} ${doneStyle}`}>
        <h2>Done</h2>
      </div>
    </div>
  );
}
