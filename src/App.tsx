import { style } from '@macaron-css/core';

const headerStyle = style({
  height: '72px',
});

function App() {
  return (
    <>
      <div class={headerStyle}>
        <p>Damir's todo list</p>
      </div>
    </>
  );
}

export default App;
