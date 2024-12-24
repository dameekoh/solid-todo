import { style } from '@macaron-css/core';
import { SectionList } from './SectionList';
import { removeSection, updateSectionTitle } from './Store';

const sectionStyle = style({
  width: '400px',
  minWidth: '400px',
  backgroundColor: '#383c44',
  border: 'solid 0px',
  borderRadius: '8px',
  padding: '0px 20px',
});

const sectionContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  height: '60px',
});

const titleInputStyle = style({
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1.5em',
  fontWeight: 'bold',
  padding: '4px',
  width: '100%',
  height: '60px',
  lineHeight: '60px',
  ':focus': {
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
  },
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
  flexShrink: 0,
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

export function Section(props: { id: string; title: string }) {
  const handleTitleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.value !== props.title) {
      updateSectionTitle(props.id, target.value);
    }
  };

  return (
    <section class={sectionStyle}>
      <span class={sectionContentStyle}>
        <input
          type='text'
          value={props.title}
          onInput={handleTitleInput}
          class={titleInputStyle}
          placeholder='Section name...'
        />
        <button
          onClick={() => removeSection(props.id)}
          class={removeButtonStyle}
          aria-label='Remove section'
        >
          ×
        </button>
      </span>
      <SectionList sectionId={props.id} />
    </section>
  );
}
