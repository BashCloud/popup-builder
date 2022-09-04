import { createNewRowWithElement } from '@/components/builder/types';

const defaultSchema = {
  rows: [
    createNewRowWithElement('ElementImage'),
    createNewRowWithElement('ElementTextBox', {
      text: 'All the text and elements in this popup should be editable and draggable',
      font_size: '32px',
    }),
    createNewRowWithElement('ElementInput'),
    createNewRowWithElement('ElementButton'),
    createNewRowWithElement('ElementTextBox', {
      text: 'No credit card required. No Surprises',
      font_size: '16px',
    }),
  ],
};

export { defaultSchema };
