import { style } from '@macaron-css/core';
import { For } from 'solid-js';
import { getUncompletedTodos, getCompletedTodos } from './Store';
import { Item } from './Item';

const containerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '400px',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
});

const panelSectionStyle = style({
  flex: 1,
  padding: '16px',
  overflowY: 'auto',
});

const todoStyle = style({
  backgroundColor: '#2d3139',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
});

const doneStyle = style({
  backgroundColor: '#2d3139',
});

export function SidePanel() {
  return (
    <div class={containerStyle}>
      <div class={`${panelSectionStyle} ${todoStyle}`}>
        <h2>Todo</h2>
        <div>
          <For each={getUncompletedTodos()}>
            {(todo) => (
              <Item id={todo.id} text={todo.text} completed={todo.completed} />
            )}
          </For>
        </div>
      </div>
      <div class={`${panelSectionStyle} ${doneStyle}`}>
        <h2>Done</h2>
        <div>
          <For each={getCompletedTodos()}>
            {(todo) => (
              <Item id={todo.id} text={todo.text} completed={todo.completed} />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
