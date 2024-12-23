import { styled } from '@macaron-css/solid';
import { globalStyle } from '@macaron-css/core';

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
});

// Container
const Container = styled('div', {
  base: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#2d3139',
  },
});

const Header = styled('header', {
  base: {
    height: '72px',
    width: '100%',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
  },
});

const Layout = styled('div', {
  base: {
    display: 'flex',
    flex: 1,
    height: 'calc(100vh - 72px)',
  },
});

const SidePanel = styled('aside', {
  base: {
    width: '400px',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: '#2d3139',
    overflowY: 'auto',
  },
});

const SectionList = styled('main', {
  base: {
    flex: 1,
    display: 'flex',
    gap: '20px',
    padding: '20px',
    overflowX: 'auto',
  },
});

const Section = styled('section', {
  base: {
    width: '400px',
    minWidth: '400px',
    backgroundColor: '#383c44',
    borderRadius: '8px',
    padding: '16px',
  },
});

const App = () => {
  return (
    <Container>
      <Header>
        <h1>Header Content</h1>
      </Header>
      <Layout>
        <SidePanel>Side Panel Content</SidePanel>
        <SectionList>
          <Section>Section Content</Section>
        </SectionList>
      </Layout>
    </Container>
  );
};

export default App;
