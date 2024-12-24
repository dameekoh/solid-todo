import { style, globalStyle } from '@macaron-css/core';
import { SidePanel } from './SidePanel';
import { Section } from './Section';

// Global styles
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('body', {
  backgroundColor: '#2d3139',
  color: '#fff',
  height: '100vh',
  overflow: 'hidden',
  fontFamily: 'sans-serif',
});

globalStyle('h2', {
  height: '60px',
  lineHeight: '60px',
  margin: 0,
});

// Styles
const containerStyle = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#2d3139',
});

const headerStyle = style({
  height: '72px',
  width: '100%',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 20px',
});

const layoutStyle = style({
  display: 'flex',
  flex: 1,
  height: 'calc(100vh - 72px)',
});

const sectionListStyle = style({
  flex: 1,
  display: 'flex',
  gap: '20px',
  overflowX: 'auto',
});

function App() {
  return (
    <div class={containerStyle}>
      <header class={headerStyle}>
        <h1>Damir's todo list</h1>
      </header>
      <div class={layoutStyle}>
        <SidePanel />
        <main class={sectionListStyle}>
          <Section />
        </main>
      </div>
    </div>
  );
}

export default App;
