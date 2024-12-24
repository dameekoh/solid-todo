import { style } from '@macaron-css/core';

const sidePanelStyle = style({
  width: '400px',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  backgroundColor: '#2d3139',
  overflowY: 'auto',
  padding: '16px',
});

export function SidePanel() {
  return <aside class={sidePanelStyle}>Side Panel Content</aside>;
}
