import { style } from '@macaron-css/core';
import { For } from 'solid-js';
import { getUncompletedTodos, getCompletedTodos } from './Store';
import { Item } from './Item';

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
        <For each={getUncompletedTodos()}>
          {(todo) => (
            <Item id={todo.id} text={todo.text} completed={todo.completed} />
          )}
        </For>
      </div>
      <div class={`${halfScreenStyle} ${doneStyle}`}>
        <h2>Done</h2>
        <For each={getCompletedTodos()}>
          {(todo) => (
            <Item id={todo.id} text={todo.text} completed={todo.completed} />
          )}
        </For>
      </div>
    </div>
  );
}
