import { AddButton } from './AddButton';
import { Item } from './Item';
import { For } from 'solid-js';
import { getTodosBySectionId, addTodo } from './Store';

export function SectionList(props: { sectionId: string }) {
  const handleAdd = () => addTodo(props.sectionId);

  return (
    <>
      <For each={getTodosBySectionId(props.sectionId)}>
        {(todo) => (
          <Item id={todo.id} text={todo.text} completed={todo.completed} />
        )}
      </For>
      <AddButton onClick={handleAdd} />
    </>
  );
}
