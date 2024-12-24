import { createStore } from 'solid-js/store';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  sectionId: string;
}

export interface Section {
  id: string;
  title: string;
}

interface Store {
  sections: Section[];
  todos: Todo[];
}

const [store, setStore] = createStore<Store>({
  sections: [],
  todos: [],
});

// Generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

// Section operations
export const addSection = () => {
  const newSection: Section = {
    id: generateId(),
    title: 'New Section',
  };

  setStore('sections', [...store.sections, newSection]);
};

export const removeSection = (sectionId: string) => {
  setStore('sections', (sections) =>
    sections.filter((section) => section.id !== sectionId)
  );
  setStore('todos', (todos) =>
    todos.filter((todo) => todo.sectionId !== sectionId)
  );
};

// Todo operations
export const addTodo = (sectionId: string) => {
  const newTodo: Todo = {
    id: generateId(),
    text: '',
    completed: false,
    sectionId,
  };

  setStore('todos', [...store.todos, newTodo]);
};

export const removeTodo = (todoId: string) => {
  setStore('todos', (todos) => todos.filter((todo) => todo.id !== todoId));
};

export const updateTodoText = (todoId: string, text: string) => {
  setStore('todos', (todos) =>
    todos.map((todo) => (todo.id === todoId ? { ...todo, text } : todo))
  );
};

export const toggleTodoComplete = (todoId: string) => {
  setStore('todos', (todos) =>
    todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

// Selectors
export const getTodosBySectionId = (sectionId: string) =>
  store.todos.filter((todo) => todo.sectionId === sectionId);

export const getUncompletedTodos = () =>
  store.todos.filter((todo) => !todo.completed);

export const getCompletedTodos = () =>
  store.todos.filter((todo) => todo.completed);

export { store };
